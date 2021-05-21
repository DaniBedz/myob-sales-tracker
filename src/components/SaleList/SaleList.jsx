import React, { useContext } from 'react';
import Sale from '../Sale/Sale';
import { SalesListContext } from '../Contexts/SalesListContext';
import NoSalesToDisplay from '../NoSalesToDisplay/NoSalesToDisplay';

const divStyle = {
  margin: '0rem 0.25rem',
};

function SaleList() {
  const { sales, archivedSales, toggleShowArchivedSales } =
    useContext(SalesListContext);
  const items = toggleShowArchivedSales === false ? sales : archivedSales;

  return (
    <>
      <div style={divStyle}>
        {items.map((sale) => {
          return <Sale sale={sale} key={sale.saleId} />;
        })}
      </div>
      {items.length === 0 ? <NoSalesToDisplay /> : null}
    </>
  );
}

export default SaleList;
