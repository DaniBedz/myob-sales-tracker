import React, { createContext, useState, useEffect, useCallback } from 'react';
import { v4 as uuid} from 'uuid';

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {

  const [sales, setSales] = useState(JSON.parse(window.localStorage.getItem('sales')) || []);

  function addSale(company) {
    const newSaleTemplate = {
      saleId: uuid(),
      type: '',
      company,
      quoteId: '',
      email: '',
      phone: '',
      quoteExpiry: '',
      status: '',
      saleDate: '',
      potentialSales: '',
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

  return (
          <SalesListContext.Provider value={{sales, setSales, addSale, saveToLocalStorage }}>
            { props.children }
          </SalesListContext.Provider>
          );
}

  export default SalesListContextProvider;