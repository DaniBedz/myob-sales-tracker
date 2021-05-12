import React, { useState } from 'react';

function Task(props) {
  const [company, setCompany] = useState(props.taskInfo.company);
  const [quoteId, setQuoteId] = useState(props.taskInfo.quoteId);
  const [email, setEmail] = useState(props.taskInfo.email);
  const [phone, setPhone] = useState(props.taskInfo.phone);
  const [quoteExpiry, setQuoteExpiry] = useState(props.taskInfo.quoteExpiry);
  const [status, setStatus] = useState(props.taskInfo.status);
  const [saleDate, setSaleDate] = useState(props.taskInfo.saleDate);
  const [potentialSales, setPotentialSales] = useState(props.taskInfo.potentialSales);
  const [utilisations, setUtilisations] = useState(props.taskInfo.utilisations);


  return (
    <div style={ divStyles } className='row'>
      <div className='col'>
        <input id={`companyInput${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Company name" onChange={ handleChange } value={company}></input>
      </div>
      <div className='col'>
        <input id={`quoteIdInput${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Quote ID" onChange={ handleChange } value={ quoteId }></input>
      </div>
      <div className='col'>
        <input id={`emailInput${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Email" onChange={ handleChange } value={ email }></input>
      </div>
      <div className='col'>
        <input id={`phoneInput${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Phone Number" onChange={ handleChange } value={ phone }></input>
      </div>
      <div className='col'>
        <input id={`quoteExpiryInput${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Quote Expiry Date" onChange={ handleChange } value={ quoteExpiry }></input>
      </div>
      <div className='col'>
        <input id={`statusInput${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Status" onChange={ handleChange } value={ status }></input>
      </div>
      <div className='col'>
        <input id={`saleDate${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Sale Date" onChange={ handleChange } value={ saleDate }></input>
      </div>
      <div className='col'>
        <input id={`poentialSales${props.taskInfo.taskId}`} style={ inputStyles } type="text" placeholder="Potential Sales" onChange={ handleChange } value={ potentialSales }></input>
      </div>
      <div className='col' style={ utilisationStyles }>
        <span>'🔧' </span>
      </div>
    </div>
  );

  function handleChange(e) {
    if (e.target.id.includes('company')) setCompany(e.target.value);
    if (e.target.id.includes('quoteId')) setQuoteId(e.target.value);
    if (e.target.id.includes('email')) setEmail(e.target.value);
    if (e.target.id.includes('phone')) setPhone(e.target.value);
    if (e.target.id.includes('quoteExpiry')) setQuoteExpiry(e.target.value);
    if (e.target.id.includes('status')) setStatus(e.target.value);
    if (e.target.id.includes('saleDate')) setSaleDate(e.target.value);
    if (e.target.id.includes('potentialSales')) setPotentialSales(e.target.value);
    if (e.target.id.includes('utilisations')) setUtilisations(e.target.value);
  }
};


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
}

const inputStyles = {
  backgroundColor: '#484848',
  border: '2px solid #343a40',
  color: 'white',
  borderRadius: '7px',
  width: '100%',
  textAlign: 'center',
}

const utilisationStyles = {
  width: '100%',
  textAlign: 'center',
  color: '#565656',
}

export default Task;