import React, { useState, useContext } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

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
  color: 'white',
  marginLeft: '3px',
  height: '2.8rem',
  paddingLeft: '1.1rem',
  paddingRight: '1.1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  marginRight: '2px',
};

function AddSaleInput({ visibility }) {
  const divStyles = {
    margin: '1.5rem 1.5rem 1rem 1rem',
    width: '100%',
    zIndex: '1',
    display: 'flex',
    visibility,
  };

  const [newSaleText, setNewSaleText] = useState('');
  const { addSale } = useContext(SalesListContext);

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
        onKeyUp={(e) => {
          if (e.code === 'Enter') handleSubmit();
        }}
        type="text"
        style={inputStyles}
        placeholder="Add new sale.."
        value={newSaleText}
        // eslint-disable-next-line jsx-a11y/no-autofocus
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

export default AddSaleInput;
