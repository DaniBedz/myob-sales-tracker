import React, { useContext } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

const buttonStyles = {
  color: 'orange',
  backgroundColor: '#565656',
  border: '2px solid #343a40',
  borderRadius: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  position: 'relative',
  width: '10rem',
  height: '2.93rem',
  top: '1.5rem',
  whiteSpace: 'nowrap',
};

function ArchiveButton() {
  const { toggleShowArchivedSales, toggleArchivedSales, sales, archivedSales } =
    useContext(SalesListContext);
  return (
    <button
      className="show-archive-btn"
      style={buttonStyles}
      type="button"
      onClick={toggleArchivedSales}
    >
      {toggleShowArchivedSales
        ? `View Sales (${sales.length})`
        : `View Archive (${archivedSales.length})`}
    </button>
  );
}

export default ArchiveButton;
