import React, { useContext } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

const divStyles = {
  height: 'calc(100vh - 7.1rem)',
  color: 'white',
  fontSize: '2rem',
  textAlign: 'center',
  backgroundColor: '#565656',
  display: 'grid',
  alignContent: 'center',
  margin: 'auto',
  padding: '0.5rem 0rem',
  borderTop: '2px solid gray',
  borderRight: '2px solid grey',
  borderBottom: '3px solid #343a40',
  borderLeft: '3px solid #343a40',
  borderRadius: '3px',
};

function NoSalesToDisplay() {
  const { toggleShowArchivedSales } = useContext(SalesListContext);
  return (
    <div style={divStyles}>
      No
      {toggleShowArchivedSales ? ' archived ' : ' '}
      sales to display
    </div>
  );
}

export default NoSalesToDisplay;
