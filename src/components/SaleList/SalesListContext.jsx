import React, { createContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import * as alertify from 'alertifyjs';
import defaults from './alertifyDefaults';
import 'alertifyjs/build/css/alertify.css';
import './alertifyCustom.css';

alertify.defaults = defaults;

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {
  const [sales, setSales] = useState(
    JSON.parse(window.localStorage.getItem('sales')) || []
  );
  const [archivedSales, setArchivedSales] = useState(
    JSON.parse(window.localStorage.getItem('archivedSales')) || []
  );

  function addSale(company) {
    const newSaleTemplate = {
      saleId: uuid(),
      type: 'None',
      company,
      quoteId: '',
      email: '',
      clientId: '',
      quoteExpiry: '',
      saleDate: '',
      potentialSales: '',
      Notes: '',
      utilisations: {
        subs: 0,
        bankFeed: 0,
        cloudFile: 0,
        PDO: 0,
        OAQ: 0,
        STP: 0,
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

  function deleteSale(saleToDelete) {
    const saleString = JSON.stringify(saleToDelete);

    function archiveSale() {
      setArchivedSales([...archivedSales, JSON.parse(saleString)]);
      saveArchivedSalesToLocalStorage();
      alertify.success('Archived');

      setSales(sales.filter((sale) => sale.saleId !== saleToDelete.saleId));
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

    alertify.confirm(
      'Delete Sale',
      `Are you sure? <button id="archive_${saleToDelete.saleId}" class="archiveBtn">Archive</button>`,
      () => {
        setSales(sales.filter((sale) => sale.saleId !== saleToDelete.saleId));
        saveSalesToLocalStorage();
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
    );
  }

  useEffect(() => {
    saveSalesToLocalStorage();
  }, [sales, saveSalesToLocalStorage]);

  useEffect(() => {
    saveArchivedSalesToLocalStorage();
  }, [archivedSales, saveArchivedSalesToLocalStorage]);

  const children = { props };
  return (
    <SalesListContext.Provider
      value={{
        sales,
        setSales,
        addSale,
        saveSalesToLocalStorage,
        deleteSale,
      }}
    >
      {children}
    </SalesListContext.Provider>
  );
}

export default SalesListContextProvider;
