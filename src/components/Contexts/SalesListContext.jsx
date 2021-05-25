import React, { createContext, useState, useEffect, useCallback } from 'react';
import * as alertify from 'alertifyjs';
// import options from '../SaleList/alertifyDefaults';
import 'alertifyjs/build/css/alertify.css';
import '../SaleList/alertifyCustom.css';

// alertify.defaults = options;

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {
  const [sales, setSales] = useState(
    JSON.parse(window.localStorage.getItem('sales')) || []
  );
  const [archivedSales, setArchivedSales] = useState(
    JSON.parse(window.localStorage.getItem('archivedSales')) || []
  );

  const [toggleShowArchivedSales, setToggleShowArchivedSales] = useState(false);

  const saveToLocalStorage = useCallback((object, text) => {
    if (!window.localStorage.getItem(text)) {
      window.localStorage.setItem(text, JSON.stringify([]));
    }
    window.localStorage.setItem(text, JSON.stringify(object));
  }, []);

  function handleChange(input, propName, sale) {
    const index = sales.indexOf(sale);
    sale[propName] = input;

    if (!toggleShowArchivedSales) {
      sales[index] = sale;
      setSales([...sales]);
    } else {
      archivedSales[index] = sale;
      setArchivedSales([...archivedSales]);
    }
  }

  useEffect(() => {
    saveToLocalStorage(sales, 'sales');
  }, [sales, saveToLocalStorage]);

  useEffect(() => {
    saveToLocalStorage(archivedSales, 'archivedSales');
  }, [archivedSales, saveToLocalStorage]);

  const { children } = props;
  return (
    <SalesListContext.Provider
      value={{
        sales,
        setSales,
        archivedSales,
        setArchivedSales,
        toggleShowArchivedSales,
        setToggleShowArchivedSales,
        alertify,
        handleChange,
      }}
    >
      {children}
    </SalesListContext.Provider>
  );
}

export default SalesListContextProvider;
