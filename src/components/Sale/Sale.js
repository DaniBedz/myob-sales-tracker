import React, { useState, useContext } from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import { SalesListContext } from '../SaleList/SalesListContext';
import Utilisations from '../Utilisations/Utilisations';
import FieldInput from '../FieldInput/FieldInput'
import Flatpickr from "react-flatpickr";
import "./flatpickr.css";

function Sale({sale}) {
  const { saveToLocalStorage } = useContext(SalesListContext);
  const [company, setCompany] = useState(sale.company);
  const [type, setType] = useState(sale.type);
  const [quoteId, setQuoteId] = useState(sale.quoteId);
  const [email, setEmail] = useState(sale.email);
  const [clientId, setClientId] = useState(sale.clientId);
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
        <FieldInput sale={sale} value="type" placeholder="Type" field={ type } setField={ setType }/>
        <FieldInput sale={sale} value="company" placeholder="Company" field={ company } setField={ setCompany }/>
        <FieldInput sale={sale} value="quoteId" placeholder="Quote ID" field={ quoteId } setField={ setQuoteId }/>
        <FieldInput sale={sale} value="email" placeholder="Email" field={ email } setField={ setEmail }/>
        <FieldInput sale={sale} value="clientId" placeholder="Client ID" field={ clientId } setField={ setClientId }/>

        <div className="col" style={ colStyles }>
          <Flatpickr
            options={ flatPickrOptions }
            placeholder="Quote Expiry"
            style={inputStyles}
            value={ quoteExpiry }
            onChange={date => {
              setQuoteExpiry(date);
              sale['quoteExpiry'] = date;
              saveToLocalStorage();
            }}
          />
        </div>

        <FieldInput sale={sale} value="status" placeholder="Status" field={ status } setField={ setStatus }/>

        <div className="col" style={ colStyles }>
          <Flatpickr
            options={ flatPickrOptions }
            placeholder="Sale Date"
            style={inputStyles}
            value={ saleDate }
            onChange={ date => {
              setSaleDate(date);
              sale['saleDate'] = date;
              saveToLocalStorage();
            }}
          />
        </div>

        <FieldInput sale={sale} value="potentialSales" placeholder="Potential Sales" field={ potentialSales } setField={ setPotentialSales }/>
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
  margin: '2px',
};

const colStyles = {
  zIndex: '1',
}

const flatPickrOptions = {
  enableTime: false,
  dateFormat: "D d/m/y",
  monthSelectorType: "static",
  disableMobile: true,
}

export default Sale;
