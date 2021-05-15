import React from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import UtilisationPanel from '../UtilisationPanel/UtilisationPanel';
import FieldInput from '../FieldInput/FieldInput'
import CalendarInput from '../CalendarInput/CalendarInput'

function Sale({ sale }) {

  return (
    <div style={ divStyles } className="row">
      <FieldInput sale={ sale } value="type" placeholder="Type" />
      <FieldInput sale={ sale } value="company" placeholder="Company" />
      <FieldInput sale={ sale } value="quoteId" placeholder="Quote ID" />
      <FieldInput sale={ sale } value="email" placeholder="Email" />
      <FieldInput sale={ sale } value="clientId" placeholder="Client ID" />
      <CalendarInput sale={ sale } value="quoteExpiry" placeholder="Quote Expiry" />
      <FieldInput sale={ sale } value="status" placeholder="Status" />
      <CalendarInput sale={ sale } value="saleDate" placeholder="Sale Date" />
      <FieldInput sale={ sale } value="potentialSales" placeholder="Potential Sales" />
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
