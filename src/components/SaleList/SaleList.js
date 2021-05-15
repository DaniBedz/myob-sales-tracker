import React, { useContext } from 'react';
import Sale from '../Sale/Sale';
import { SalesListContext } from './SalesListContext';

function SaleList() {
  const { sales } = useContext(SalesListContext);
  return (
    <div style={divStyle}>
      { sales.map(sale => {
        return <Sale sale={ sale } key={ sale.saleId } />
      }) }
    </div>
  );
}

const divStyle = {
  margin: '0rem 0.25rem',
};

export default SaleList;
