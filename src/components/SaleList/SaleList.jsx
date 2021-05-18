import React, { useContext } from 'react';
import Sale from '../Sale/Sale';
import { SalesListContext } from '../Contexts/SalesListContext';

const divStyle = {
  margin: '0rem 0.25rem',
};

function SaleList() {
  const { sales, archivedSales, toggleShowArchivedSales } =
    useContext(SalesListContext);
  const items = toggleShowArchivedSales === false ? sales : archivedSales;

  return (
    <div style={divStyle}>
      {items.map((sale) => {
        return <Sale sale={sale} key={sale.saleId} />;
      })}
    </div>
  );
}

export default SaleList;
