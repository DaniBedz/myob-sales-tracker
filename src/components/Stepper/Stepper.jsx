import React, { useState, useContext } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';
import './Stepper.css';

function Stepper({ utilisation, sale, type }) {
  const { saveSalesToLocalStorage } = useContext(SalesListContext);
  const [number, setNumber] = useState(utilisation);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
    sale.utilisations[type] += 1;
    saveSalesToLocalStorage();
  }

  function decrement() {
    if (number === 0) return;
    setNumber((prevNumber) => prevNumber - 1);
    sale.utilisations[type] -= 1;
    saveSalesToLocalStorage();
  }

  return (
    <div className="input-number">
      <button type="button" className="plusMinus" onClick={decrement}>
        &minus;
      </button>
      <span>{number}</span>
      <button type="button" className="plusMinus" onClick={increment}>
        &#43;
      </button>
    </div>
  );
}

export default Stepper;
