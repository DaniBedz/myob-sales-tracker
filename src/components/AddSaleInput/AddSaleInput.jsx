import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { SalesListContext } from '../Contexts/SalesListContext';

const inputStyles = {
  backgroundColor: '#343a40',
  color: 'white',
  border: '0',
  borderRadius: '7px',
  outline: 'none',
  paddingLeft: '1.5rem',
  height: '2.8rem',
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
  const [newSaleText, setNewSaleText] = useState('');
  const { toggleShowArchivedSales, sales, setSales } =
    useContext(SalesListContext);

  const divStyles = {
    margin: '1.5rem 1.5rem 1rem 1rem',
    zIndex: '1',
    visibility,
    position: 'relative',
    left: `${toggleShowArchivedSales ? '1.5rem' : ''}`,
  };

  function addSale(company) {
    setSales([
      ...sales,
      {
        saleId: uuid(),
        company,
        quoteId: '',
        email: '',
        clientId: '',
        quoteExpiry: '',
        saleDate: '',
        potentialSales: 0,
        notes: '',
        utilisations: {
          subs: 0,
          bankFeed: 0,
          PDO: 0,
          cloudFile: 0,
          OAQ: 0,
          offlineFile: 0,
          payroll: 0,
        },
      },
    ]);
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
        onChange={(e) => setNewSaleText(e.target.value)}
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
