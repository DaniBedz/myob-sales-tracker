import React from 'react';

import '../../bootstrap.min.css';
import '../../App.css';
import Header from '../Header/Header';
import SaleList from '../SaleList/SaleList';
import { SalesListContextProvider } from '../Contexts/SalesListContext';

const appStyles = {
    backgroundColor: '#565656',
};

export default function Dashboard() {
    return (
        <div style={appStyles}>
            <SalesListContextProvider>
                <Header />
                <SaleList />
            </SalesListContextProvider>
        </div>
    );
};
