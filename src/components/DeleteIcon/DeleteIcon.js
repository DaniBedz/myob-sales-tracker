import React, { useContext } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext';

function DeleteIcon({saleId}) {
  const { deleteSale } = useContext(SalesListContext);


  return (
    <div className="col" style={deleteIconStyles}>
      <span onClick={()=> deleteSale(saleId)}>'🗑'</span>
    </div>
  )
}

const deleteIconStyles = {
  width: '100%',
  textAlign: 'center',
  color: '#565656',
  cursor: 'pointer'
};

export default DeleteIcon;