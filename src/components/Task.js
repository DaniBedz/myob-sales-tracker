import React, { useState } from 'react';

function Task(props) {
  const [company, setCompany] = useState(props.taskInfo.company);
  const [quoteId, setQuoteId] = useState(props.taskInfo.quoteId);
  const [email, setEmail] = useState(props.taskInfo.email);
  const [phone, setPhone] = useState(props.taskInfo.phone);

  return (
    <div style={style}>
      <input id={`companyInput${props.taskInfo.taskId}`} type="text" placeholder="Company name" onChange={ handleChange } value={company}></input>
      <input id={`quoteIdInput${props.taskInfo.taskId}`} type="text" placeholder="Quote ID" onChange={ handleChange } value={ quoteId }></input>
      <input id={`emailInput${props.taskInfo.taskId}`} type="text" placeholder="Email" onChange={ handleChange } value={ email }></input>
      <input id={`phoneInput${props.taskInfo.taskId}`} type="text" placeholder="Phone Number" onChange={ handleChange } value={ phone }></input>
    </div>
  );

  function handleChange(e) {
    if (e.target.id.includes('company')) setCompany(e.target.value);
    if (e.target.id.includes('quoteId')) setQuoteId(e.target.value);
    if (e.target.id.includes('email')) setEmail(e.target.value);
    if (e.target.id.includes('phone')) setPhone(e.target.value);
  }
};


const style = {
  backgroundColor: '#565656',
}

export default Task;