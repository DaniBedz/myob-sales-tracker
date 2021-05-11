import React from 'react';

const AddTaskInput = () => {
  return (
    <div className={'align-self-start'} style={ divStyles }>
      <input id="newCompanyNameInput" type="text" style={ inputStyles } placeholder="Track new sale.." autoFocus></input>
      <button id="btn-add-sale" style={ plusButtonStyles }type='submit'>+</button>
    </div>
  );
};

const inputStyles = {
  backgroundColor: '#343a40',
  color: 'white',
  border: '0',
  borderRadius: '7px',
  outline: 'none',
  paddingLeft: '1.5rem',
  height: '2.8rem',
  width: '100%',
}

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
}

const divStyles = {
  margin: '1rem',
  width: '100%',
  display: 'flex',
}

export default AddTaskInput;