import React, { useEffect } from 'react';
import './bootstrap.min.css';
import '../App/App.css';
import { navigate } from 'raviger';

import Header from '../Header/Header';
import SaleList from '../SaleList/SaleList';
import { SalesListContextProvider } from '../Contexts/SalesListContext';

const appStyles = {
    backgroundColor: '#565656',
};

export default function Dashboard() {
    useEffect(() => {
        if (!localStorage.getItem('credential')) navigate('/login');
    }, []);

    return (
        <div style={appStyles}>
            <SalesListContextProvider>
                <Header />
                <SaleList />
            </SalesListContextProvider>
        </div>
    );
}
