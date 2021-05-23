import React, { useContext } from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import arrayMove from 'array-move';
import Sale from '../Sale/Sale';
import { SalesListContext } from '../Contexts/SalesListContext';
import NoSalesToDisplay from '../NoSalesToDisplay/NoSalesToDisplay';

function SaleList() {
  const {
    sales,
    setSales,
    archivedSales,
    setArchivedSales,
    toggleShowArchivedSales,
  } = useContext(SalesListContext);

  let items = toggleShowArchivedSales === false ? sales : archivedSales;

  const onSortEnd = (oldIndex, newIndex) => {
    items = arrayMove(items, oldIndex, newIndex);
    if (!toggleShowArchivedSales) {
      setSales(items);
    } else {
      setArchivedSales(items);
    }
  };

  const listStyles = {
    margin: items.length ? '0rem 0.25rem' : '0',
    userSelect: 'none',
  };

  const itemStyles = {
    cursor: 'grab',
  };

  return (
    <SortableList onSortEnd={onSortEnd} style={listStyles}>
      {items.map((sale) => (
        <SortableItem key={sale.saleId}>
          <div style={itemStyles}>
            <Sale sale={sale} />
          </div>
        </SortableItem>
      ))}
      {items.length === 0 ? <NoSalesToDisplay /> : null}
    </SortableList>
  );
}

export default SaleList;
