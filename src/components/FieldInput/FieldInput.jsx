import React, { useContext, useState } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

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

function FieldInput({ sale, propName, placeholder }) {
  const { handleChange } = useContext(SalesListContext);
  const [inputValue, setInputValue] = useState(sale[propName]);

  return (
    <div className="col" style={colStyles}>
      <input
        id={`${propName}_${sale.saleId}`}
        style={inputStyles}
        type="text"
        placeholder={placeholder}
        onChange={(event) => {
          setInputValue(event.target.value);
          handleChange(event.target.value, propName, sale);
        }}
        value={inputValue}
      />
    </div>
  );
}

export default FieldInput;
