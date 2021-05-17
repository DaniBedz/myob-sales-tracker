import React, { useContext, useState } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext.jsx';

const inputStyles = {
  backgroundColor: '#484848',
  border: '2px solid #343a40',
  color: 'white',
  borderRadius: '7px',
  width: '100%',
  textAlign: 'center',
  margin: '2px',
};

const colStyles = {
  zIndex: '1',
};

function FieldInput({ sale, value, placeholder }) {
  const { saveSalesToLocalStorage } = useContext(SalesListContext);
  const [inputValue, setInputValue] = useState(sale[value]);

  function handleChange(input) {
    setInputValue(input);
    sale[value] = input;
    saveSalesToLocalStorage();
  }

  return (
    <div className="col" style={colStyles}>
      <input
        id={`${value}_${sale.saleId}`}
        style={inputStyles}
        type="text"
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
        value={inputValue}
      />
    </div>
  );
}

export default FieldInput;
