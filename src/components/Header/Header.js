import React from 'react';
import logo from './logo.png';
import AddTaskInput from '../AddTaskInput/AddTaskInput';

const Header = () => {
  return (
    <div style={ containerStyle }>
      <div className="row">
        <div className="col-8">
          <img src={logo} alt="logo" style={ logoStyle }></img>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-start">
          <AddTaskInput />
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  width: '100%',
}

const logoStyle = {
  width: '100px',
  margin: '1rem',
}

export default Header;