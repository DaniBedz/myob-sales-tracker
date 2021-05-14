import React, { useState, useContext } from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import { SalesListContext } from '../SaleList/SalesListContext';
import Utilisations from '../Utilisations/Utilisations';

function Sale({sale}) {
  const { saveToLocalStorage } = useContext(SalesListContext);
  const [company, setCompany] = useState(sale.company);
  const [type, setType] = useState(sale.type);
  const [quoteId, setQuoteId] = useState(sale.quoteId);
  const [email, setEmail] = useState(sale.email);
  const [phone, setPhone] = useState(sale.phone);
  const [quoteExpiry, setQuoteExpiry] = useState(sale.quoteExpiry);
  const [status, setStatus] = useState(sale.status);
  const [saleDate, setSaleDate] = useState(sale.saleDate);
  const [potentialSales, setPotentialSales] = useState(sale.potentialSales);

  function handleChange(value, field, setField) {
    setField(value);
    sale[field] = value;
    saveToLocalStorage();
  }

  return (
    <>
      <div style={divStyles} className="row">
        <div className="col">
          <input
            id={`typeInput_${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Type"
            onChange={(event) => handleChange(event.target.value,'type', setType)}
            value={ type }
          />
        </div>
        <div className="col">
          <input
            id={`companyInput_${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Company name"
            onChange={(event) => handleChange(event.target.value,'company', setCompany)}
            value={ company }
          />
        </div>
        <div className="col">
          <input
            id={`quoteIdInput${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Quote ID"
            onChange={(event) => handleChange(event.target.value,'quoteId', setQuoteId)}
            value={ quoteId }
          />
        </div>
        <div className="col">
          <input
            id={`emailInput${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Email"
            onChange={(event) => handleChange(event.target.value,'email', setEmail)}
            value={email}
          />
        </div>
        <div className="col">
          <input
            id={`phoneInput${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Phone Number"
            onChange={(event) => handleChange(event.target.value,'phone', setPhone)}
            value={phone}
          />
        </div>
        <div className="col">
          <input
            id={`quoteExpiryInput${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Quote Expiry Date"
            onChange={(event) => handleChange(event.target.value,'quoteExpiry', setQuoteExpiry)}
            value={quoteExpiry}
          />
        </div>
        <div className="col">
          <input
            id={`statusInput${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Status"
            onChange={(event) => handleChange(event.target.value,'status', setStatus)}
            value={status}
          />
        </div>
        <div className="col">
          <input
            id={`saleDate${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Sale Date"
            onChange={(event) => handleChange(event.target.value,'saleDate', setSaleDate)}
            value={saleDate}
          />
        </div>
        <div className="col">
          <input
            id={`poentialSales${sale.saleId}`}
            style={inputStyles}
            type="text"
            placeholder="Potential Sales"
            onChange={(event) => handleChange(event.target.value,'potentialSales', setPotentialSales)}
            value={potentialSales}
          />
        </div>
        <DeleteIcon saleId={sale.saleId}/>
        <Utilisations sale={ sale } />
      </div>
    </>
  );
}

const divStyles = {
  backgroundColor: '#565656',
  justifyContent: 'space-evenly',
  display: 'flex',
  padding: '0.5rem 0rem',
  borderTop: '2px solid gray',
  borderRight: '2px solid grey',
  borderBottom: '3px solid #343a40',
  borderLeft: '3px solid #343a40',
  borderRadius: '3px',
};

const inputStyles = {
  backgroundColor: '#484848',
  border: '2px solid #343a40',
  color: 'white',
  borderRadius: '7px',
  width: '100%',
  textAlign: 'center',
};

export default Sale;
