import React, { useContext, createRef } from 'react';
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

    const ref = createRef();

    return (
        <SortableList id="sales-list" onSortEnd={onSortEnd} style={listStyles}>
            {items.map((sale) => (
                <SortableItem key={sale.saleId}>
                    <Sale ref={ref} style={itemStyles} sale={sale} />
                </SortableItem>
            ))}
            {items.length === 0 ? <NoSalesToDisplay /> : null}
        </SortableList>
    );
}

export default SaleList;
