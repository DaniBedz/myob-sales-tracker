import React, { useContext } from 'react';
import Sale from '../Sale/Sale';
import { SalesListContext } from './SalesListContext';

const divStyle = {
  margin: '0rem 0.25rem',
};

function SaleList() {
  const { sales } = useContext(SalesListContext);
  return (
    <div style={divStyle}>
      {sales.map(sale => {
        return <Sale sale={ sale } key={ sale.saleId } />
      })}
    </div>
  );
}

export default SaleList;
