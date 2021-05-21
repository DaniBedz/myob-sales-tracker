import React, { useContext } from 'react';
import ArchiveText from '../ArchiveText/ArchiveText';
import { SalesListContext } from '../Contexts/SalesListContext';

function ArchiveButton() {
  const { toggleShowArchivedSales, toggleArchivedSales, sales, archivedSales } =
    useContext(SalesListContext);

  const buttonStyles = {
    color: `${toggleShowArchivedSales ? 'lime' : 'orange'}`,
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

  return (
    <>
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
      {toggleShowArchivedSales ? <ArchiveText /> : ''}
    </>
  );
}

export default ArchiveButton;
