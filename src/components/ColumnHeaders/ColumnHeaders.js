import React from 'react';

function ColumnHeaders() {
  return (
    <div className="row" style={ rowStyles }>
      <div className="col" style={ columnStyles }>Company</div>
      <div className="col" style={ columnStyles }>Quote ID</div>
      <div className="col" style={ columnStyles }>Email</div>
      <div className="col" style={ columnStyles }>Phone</div>
      <div className="col" style={ columnStyles }>Quote Expiry</div>
      <div className="col" style={ columnStyles }>Status</div>
      <div className="col" style={ columnStyles }>Sale Date</div>
      <div className="col" style={ columnStyles }>Potential Sales</div>
    </div>
  );
};

const columnStyles = {
  textAlign: 'center',
  backgroundColor: '#565656',
  justifyContent: 'space-evenly',
  display: 'flex',
  color: 'white',
}

const rowStyles = {
  borderLeft: '3px solid #343a40',
  borderRight: '2px solid grey',
  borderRadius: '3px',
  marginLeft: '-3px',
  marginRight: '-2px',
}

export default ColumnHeaders;
