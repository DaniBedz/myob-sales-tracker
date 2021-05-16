import React, { createContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import * as alertify from 'alertifyjs';
import defaults from './alertifyDefaults';
import 'alertifyjs/build/css/alertify.css';
import './alertifyCustom.css';
import './alertifyCustom.css';

alertify.defaults = defaults;

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {

  const [sales, setSales] = useState(JSON.parse(window.localStorage.getItem('sales')) || []);
  const [archivedSales, setArchivedSales] = useState(JSON.parse(window.localStorage.getItem('archivedSales')) || []);

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

  function deleteSale(saleToDelete) {
    const saleString = JSON.stringify(saleToDelete);

    function archiveSale() {
      setArchivedSales([...archivedSales, JSON.parse(saleString)]);
      saveArchivedSalesToLocalStorage();
      alertify.success('Archived');

      setSales(sales.filter(sale => sale.saleId !== saleToDelete.saleId));
      document.querySelector('.archiveBtn').removeEventListener('click', archiveSale);
      document.querySelector('.ajs-close').click();
    }

    setTimeout(document.querySelector('.archiveBtn').addEventListener('click', archiveSale), 1);

    alertify.confirm('Delete Sale', `Are you sure? <button id="archive_${ saleToDelete.saleId }" class="archiveBtn">Archive</button>`, function() {
      setSales(sales.filter(sale => sale.saleId !== saleToDelete.saleId));
      saveSalesToLocalStorage();
      alertify.success('Deleted');
      }, function() {
      alertify.error('Cancelled');
    });
  };

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

  useEffect(() => {
    saveSalesToLocalStorage();
    }, [sales, saveSalesToLocalStorage]);

  useEffect(() => {
    saveArchivedSalesToLocalStorage();
    }, [archivedSales, saveArchivedSalesToLocalStorage]);

  return (
    <SalesListContext.Provider value={{ sales, setSales, addSale, saveSalesToLocalStorage, deleteSale }}>
      { props.children }
    </SalesListContext.Provider>
  );
}

  export default SalesListContextProvider;