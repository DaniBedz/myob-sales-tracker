import React, { createContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import * as alertify from 'alertifyjs';
import defaults from '../SaleList/alertifyDefaults';
import 'alertifyjs/build/css/alertify.css';
import '../SaleList/alertifyCustom.css';

alertify.defaults = defaults;

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {
  const [sales, setSales] = useState(
    JSON.parse(window.localStorage.getItem('sales')) || []
  );
  const [archivedSales, setArchivedSales] = useState(
    JSON.parse(window.localStorage.getItem('archivedSales')) || []
  );

  const [toggleShowArchivedSales, setToggleShowArchivedSales] = useState(false);

  function addSale(company) {
    const newSaleTemplate = {
      saleId: uuid(),
      company,
      quoteId: '',
      email: '',
      clientId: '',
      quoteExpiry: '',
      saleDate: '',
      notes: '',
      potentialSales: 0,
      utilisations: {
        subs: 0,
        bankFeed: 0,
        cloudFile: 0,
        PDO: 0,
        OAQ: 0,
        payroll: 0,
        offlineFile: 0,
      },
    };
    setSales([...sales, newSaleTemplate]);
  }

  const saveSalesToLocalStorage = useCallback(() => {
    if (!window.localStorage.getItem('sales')) {
      window.localStorage.setItem('sales', JSON.stringify([]));
    }
    window.localStorage.setItem('sales', JSON.stringify(sales));
  }, [sales]);

  const saveArchivedSalesToLocalStorage = useCallback(() => {
    if (!window.localStorage.getItem('archivedSales')) {
      window.localStorage.setItem('archivedSales', JSON.stringify([]));
    }
    window.localStorage.setItem('archivedSales', JSON.stringify(archivedSales));
  }, [archivedSales]);

  function manageSale(saleToManage) {
    const saleString = JSON.stringify(saleToManage);

    function archiveSale() {
      setArchivedSales([...archivedSales, JSON.parse(saleString)]);
      saveArchivedSalesToLocalStorage();
      alertify.success('Archived');

      setSales(sales.filter((sale) => sale.saleId !== saleToManage.saleId));
      document
        .querySelector('.archiveBtn')
        .removeEventListener('click', archiveSale);
      document.querySelector('.ajs-close').click();
    }

    function addArchiveBtnEvent() {
      const archiveBtn = document.querySelector('.archiveBtn');
      archiveBtn.addEventListener('click', archiveSale);
    }

    setTimeout(addArchiveBtnEvent, 1);

    alertify
      .confirm(
        'Delete Sale',
        `Are you sure? <button id="archive_${saleToManage.saleId}" class="archiveBtn">Archive</button>`,
        () => {
          setSales((prevSales) =>
            prevSales.filter((sale) => sale.saleId !== saleToManage.saleId)
          );
          document
            .querySelector('.archiveBtn')
            .removeEventListener('click', archiveSale);
          alertify.success('Deleted');
        },
        () => {
          document
            .querySelector('.archiveBtn')
            .removeEventListener('click', archiveSale);
          alertify.error('Cancelled');
        }
      )
      .set({
        invokeOnCloseOff: false,
        oncancel() {
          document
            .querySelector('.archiveBtn')
            .removeEventListener('click', archiveSale);
        },
      });
  }

  function manageArchivedSale(archivedSale) {
    const archivedSaleString = JSON.stringify(archivedSale);

    function restoreArchivedSale() {
      setSales([...sales, JSON.parse(archivedSaleString)]);
      saveArchivedSalesToLocalStorage();
      alertify.success('Restored from Archive');

      setArchivedSales(
        archivedSales.filter((sale) => sale.saleId !== archivedSale.saleId)
      );
      document
        .querySelector('.archiveBtn')
        .removeEventListener('click', restoreArchivedSale);
      document.querySelector('.ajs-close').click();
    }

    function addRestoreFromArchiveBtnEvent() {
      const archiveBtn = document.querySelector('.archiveBtn');
      archiveBtn.addEventListener('click', restoreArchivedSale);
    }

    setTimeout(addRestoreFromArchiveBtnEvent, 1);

    alertify
      .confirm(
        'Delete Sale',
        `Are you sure? <button id="archive_${archivedSale.saleId}" class="archiveBtn archiveBtnRestore">Restore From Archive</button>`,
        () => {
          setArchivedSales((prevSales) =>
            prevSales.filter((sale) => sale.saleId !== archivedSale.saleId)
          );
          document
            .querySelector('.archiveBtn')
            .removeEventListener('click', restoreArchivedSale);
          alertify.success('Deleted');
        },
        () => {
          document
            .querySelector('.archiveBtn')
            .removeEventListener('click', restoreArchivedSale);
          alertify.error('Cancelled');
        }
      )
      .set({
        invokeOnCloseOff: false,
        oncancel() {
          document
            .querySelector('.archiveBtn')
            .removeEventListener('click', restoreArchivedSale);
        },
      });
  }

  function toggleArchivedSales() {
    setToggleShowArchivedSales(!toggleShowArchivedSales);
  }

  function calculatePotentialSales(utilisations) {
    return (
      utilisations.subs +
      utilisations.PDO +
      (utilisations.bankFeed +
        utilisations.cloudFile +
        utilisations.OAQ +
        utilisations.offlineFile) *
        0.25 +
      utilisations.payroll * 0.5
    );
  }

  function handleChange(input, propName, sale) {
    function reduce(prev) {
      sale[propName] = input;
      const previousMinusCurrent = prev.filter(
        (item) => item.saleId !== sale.saleId
      );
      const newSalesObj = [...previousMinusCurrent, sale];
      return newSalesObj.sort((a, b) => a.order - b.order);
    }
    if (!toggleShowArchivedSales) {
      setSales((prev) => reduce(prev));
    } else {
      setArchivedSales((prev) => reduce(prev));
    }
  }

  useEffect(() => {
    saveSalesToLocalStorage();
  }, [sales, saveSalesToLocalStorage]);

  useEffect(() => {
    saveArchivedSalesToLocalStorage();
  }, [archivedSales, saveArchivedSalesToLocalStorage]);

  const { children } = props;
  return (
    <SalesListContext.Provider
      value={{
        sales,
        setSales,
        addSale,
        saveSalesToLocalStorage,
        manageSale,
        archivedSales,
        setArchivedSales,
        toggleShowArchivedSales,
        setToggleShowArchivedSales,
        toggleArchivedSales,
        manageArchivedSale,
        handleChange,
        calculatePotentialSales,
      }}
    >
      {children}
    </SalesListContext.Provider>
  );
}

export default SalesListContextProvider;
