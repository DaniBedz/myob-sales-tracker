import React, { useState, useContext } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext'

function AddSaleInput() {
  const { addSale } = useContext(SalesListContext);
  const [newSaleText, setNewSaleText] = useState('');

  function handleChange(event) {
    setNewSaleText(event.target.value);
  }

  function handleSubmit() {
    if (newSaleText === '') return;
    addSale(newSaleText);
    setNewSaleText('');
  }

  return (
    <div className="align-self-start" style={divStyles}>
      <input
        id="newCompanyNameInput"
        onChange={handleChange}
        type="text"
        style={inputStyles}
        placeholder="Track new sale.."
        value={newSaleText}
        autoFocus
        required
      />
      <button
        id="btn-add-sale"
        onClick={handleSubmit}
        style={plusButtonStyles}
        type="submit"
      >
        +
      </button>
    </div>
  );
}

const inputStyles = {
  backgroundColor: '#343a40',
  color: 'white',
  border: '0',
  borderRadius: '7px',
  outline: 'none',
  paddingLeft: '1.5rem',
  height: '2.8rem',
  width: '100%',
};

const plusButtonStyles = {
  border: '2px solid #343a40',
  background: 'linear-gradient(90deg, #6c00ac, #ff0077)',
  borderRadius: '7px',
  color: 'black',
  marginLeft: '3px',
  height: '2.8rem',
  paddingLeft: '1.1rem',
  paddingRight: '1.1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  marginRight: '2px',
};

const divStyles = {
  margin: '1rem',
  width: '100%',
  display: 'flex',
};

export default AddSaleInput;
