import React, { useState, useContext } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext';
import './Stepper.css';

function Stepper({ utilisation, sale, type }) {
  const { saveToLocalStorage } = useContext(SalesListContext);
  const [number, setNumber] = useState(utilisation);

  function increment() {
    setNumber(prevNumber => prevNumber + 1);
    sale.utilisations[type]++;
    saveToLocalStorage();
  }

  function decrement() {
    if (number === 0) return;
    setNumber(prevNumber => prevNumber - 1);
    sale.utilisations[type]--;
    saveToLocalStorage();
  }

  return (
    <div className="input-number">
      <button type="button" onClick={ decrement }>&minus;</button>
      <span>{ number }</span>
      <button type="button" onClick={ increment }>&#43;</button>
    </div>
  );
}

export default Stepper;