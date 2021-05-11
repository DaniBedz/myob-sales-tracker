import React from 'react';

const AddTaskInput = () => {
  return (
    <div>
      <input id="newCompanyNameInput" type="text" style={styles} placeholder="Track new sale.." autofocus></input>
      <button id="btn-add-sale" style={plusButton}type='submit'>+</button>
    </div>
  );
};

const styles = {
  backgroundColor: '#343a40',
  color: 'white',
  border: '0',
  borderRadius: '7px',
  outline: 'none',
  paddingLeft: '1.5rem',
  height: '2.8rem',
}

const plusButton = {
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
  margin: '0',
}

export default AddTaskInput;