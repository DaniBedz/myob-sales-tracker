import React from 'react';
import logo from './logo.png';
import AddSaleInput from '../AddSaleInput/AddSaleInput';
import ColumnHeaders from '../ColumnHeaders/ColumnHeaders';

function Header() {
  return (
    <div style={ containerStyle }>
      <div className="row">
        <div className="col-8">
          <img src={ logo } alt="logo" style={ logoStyle }></img>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-start">
          <AddSaleInput />
        </div>
      </div>
      <ColumnHeaders />
    </div>
  );
}

const containerStyle = {
  borderTop: '2px solid gray',
  borderRight: '2px solid grey',
  borderBottom: '3px solid #343a40',
  borderLeft: '3px solid #343a40',
  borderRadius: '3px',
};

const logoStyle = {
  width: '100px',
  margin: '1rem',
};

export default Header;