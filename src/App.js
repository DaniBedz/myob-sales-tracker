import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import SaleList from './components/SaleList/SaleList';
import { SalesListContextProvider } from './components/SaleList/SalesListContext';

function App() {

  return (
    <div style={ appStyles }>
      <SalesListContextProvider>
        <Header />
        <SaleList />
      </SalesListContextProvider>
    </div>
  );
}

const appStyles = {
  backgroundColor: '#565656',
}

export default App;
