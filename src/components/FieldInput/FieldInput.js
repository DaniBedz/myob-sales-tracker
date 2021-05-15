import React, { useContext } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext';

function FieldInput({sale, value, placeholder, field, setField}) {

  const { saveToLocalStorage } = useContext(SalesListContext);

  return (
    <div className="col" style={ colStyles }>
      <input
        id={`${value}_${sale.saleId}`}
        style={inputStyles}
        type="text"
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value, value, setField)}
        value={ field }
      />
    </div>
  )

  function handleChange(input, value, setField) {
    setField(input);
    sale[value] = input;
    saveToLocalStorage();
  }
}
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
}

export default FieldInput
