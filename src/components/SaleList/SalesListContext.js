import React, { createContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import * as alertify from 'alertifyjs';
import defaults from './alertifyDefaults';
import 'alertifyjs/build/css/alertify.css';
import './alertifyCustom.css';

alertify.defaults = defaults;

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {

  const [sales, setSales] = useState(JSON.parse(window.localStorage.getItem('sales')) || []);

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

  const saveToLocalStorage = useCallback(() => {
      if (!window.localStorage.getItem('sales')) {
        window.localStorage.setItem('sales', JSON.stringify([]));
      }
      window.localStorage.setItem('sales', JSON.stringify(sales));
  }, [sales]);

  useEffect(() => {
    saveToLocalStorage();
    }, [sales, saveToLocalStorage]);

  // function deleteSale(saleId) {
  //   alertify.confirm('Delete Sale', 'Are you sure?', function() {
  //     setSales(sales.filter(sale => sale.saleId !== saleId));
  //     saveToLocalStorage();
  //     alertify.success('Deleted');
  //     }, function() {
  //     alertify.error('Cancelled');
  //   });
  function deleteSale(saleId) {
    alertify.confirm('Delete Sale', 'Are you sure? <button class="archiveBtn">Archive</button>', function() {
      setSales(sales.filter(sale => sale.saleId !== saleId));
      saveToLocalStorage();
      alertify.success('Deleted');
      }, function() {
      alertify.error('Cancelled');
    });
  };

  return (
    <SalesListContext.Provider value={{ sales, setSales, addSale, saveToLocalStorage, deleteSale, alertify }}>
      { props.children }
    </SalesListContext.Provider>
  );
}

  export default SalesListContextProvider;