import React, { useState } from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import UtilisationPanel from '../UtilisationPanel/UtilisationPanel';
import FieldInput from '../FieldInput/FieldInput'
import CalendarInput from '../CalendarInput/CalendarInput'

function Sale({ sale }) {
  const [company, setCompany] = useState(sale.company);
  const [type, setType] = useState(sale.type);
  const [quoteId, setQuoteId] = useState(sale.quoteId);
  const [email, setEmail] = useState(sale.email);
  const [clientId, setClientId] = useState(sale.clientId);
  const [quoteExpiry, setQuoteExpiry] = useState(sale.quoteExpiry);
  const [status, setStatus] = useState(sale.status);
  const [saleDate, setSaleDate] = useState(sale.saleDate);
  const [potentialSales, setPotentialSales] = useState(sale.potentialSales);

  return (
    <div style={ divStyles } className="row">
      <FieldInput sale={ sale } value="type" placeholder="Type" field={ type } setField={ setType }/>
      <FieldInput sale={ sale } value="company" placeholder="Company" field={ company } setField={ setCompany }/>
      <FieldInput sale={ sale } value="quoteId" placeholder="Quote ID" field={ quoteId } setField={ setQuoteId }/>
      <FieldInput sale={ sale } value="email" placeholder="Email" field={ email } setField={ setEmail }/>
      <FieldInput sale={ sale } value="clientId" placeholder="Client ID" field={ clientId } setField={ setClientId }/>
      <CalendarInput sale={ sale } value="quoteExpiry" placeholder="Quote Expiry" field={ quoteExpiry } setField={ setQuoteExpiry }/>
      <FieldInput sale={ sale } value="status" placeholder="Status" field={ status } setField={ setStatus }/>
      <CalendarInput sale={ sale } value="saleDate" placeholder="Sale Date" field={ saleDate } setField={ setSaleDate }/>
      <FieldInput sale={ sale } value="potentialSales" placeholder="Potential Sales" field={ potentialSales } setField={ setPotentialSales }/>
      <DeleteIcon saleId={ sale.saleId }/>
      <UtilisationPanel sale={ sale } />
    </div>
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

export default Sale;
