import React, { useState } from 'react';
import './Stepper.css';

function Stepper(props) {
  let [value, setValue] = useState(props.value);

  function increment() {
    setValue(value += 1);
  }

  function decrement() {
    if (value === 0) return;
    setValue(value -= 1);
  }

  return (
    <div className="input-number">
      <button type="button" onClick={ decrement }>&minus;</button>
      <span>{ value }</span>
      <button type="button" onClick={ increment }>&#43;</button>
    </div>
  );
};

export default Stepper;