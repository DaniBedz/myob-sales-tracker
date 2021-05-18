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
};

function ArchiveButton() {
  const { toggleShowArchivedSales, toggleArchivedSales } =
    useContext(SalesListContext);
  return (
    <button
      className="show-archive-btn"
      style={buttonStyles}
      type="button"
      onClick={toggleArchivedSales}
    >
      {toggleShowArchivedSales ? 'View Sales' : 'View Archive'}
    </button>
  );
}

export default ArchiveButton;
