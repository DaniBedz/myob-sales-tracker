import React, {
    createContext, useState, useEffect, useCallback,
} from 'react';
import {
    doc, setDoc, getFirestore,
} from 'firebase/firestore';
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import '../SaleList/alertifyCustom.css';

export const SalesListContext = createContext();

export function SalesListContextProvider(props) {
    const { uid } = JSON.parse(localStorage.getItem('user'));
    const db = getFirestore();
    const docRef = doc(db, 'users', uid);

    const [sales, setSales] = useState(
        JSON.parse(window.localStorage.getItem('sales')) || [],
    );
    const [archivedSales, setArchivedSales] = useState(
        JSON.parse(window.localStorage.getItem('archivedSales')) || [],
    );

    const [toggleShowArchivedSales, setToggleShowArchivedSales] = useState(false);

    const saveToLocalStorage = useCallback((object, text) => {
        if (!window.localStorage.getItem(text)) {
            window.localStorage.setItem(text, JSON.stringify([]));
        }
        window.localStorage.setItem(text, JSON.stringify(object));
    }, []);

    async function writeToDB() {
        try {
            await setDoc(docRef, {
                sales,
                archivedSales,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    function handleChange(input, propName, sale) {
        const index = sales.indexOf(sale);
        const changedSale = sale;
        changedSale[propName] = input;

        if (!toggleShowArchivedSales) {
            sales[index] = changedSale;
            setSales([...sales]);
        } else {
            archivedSales[index] = changedSale;
            setArchivedSales([...archivedSales]);
        }
    }

    useEffect(() => {
        saveToLocalStorage(sales, 'sales');
        writeToDB();
    }, [sales, saveToLocalStorage]);

    useEffect(() => {
        saveToLocalStorage(archivedSales, 'archivedSales');
        writeToDB();
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
