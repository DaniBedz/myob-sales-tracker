import React from 'react';
import logo from './logo.png';
import AddTaskInput from '../AddTaskInput/AddTaskInput';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo" width="200px"></img>
      <AddTaskInput />
    </div>
  );
};

export default Header;