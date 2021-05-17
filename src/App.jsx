import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import SaleList from './components/SaleList/SaleList';
import { SalesListContextProvider } from './components/Contexts/SalesListContext';

const appStyles = {
  backgroundColor: '#565656',
};

function App() {
  return (
    <div style={appStyles}>
      <SalesListContextProvider>
        <Header />
        <SaleList />
      </SalesListContextProvider>
    </div>
  );
}

export default App;
