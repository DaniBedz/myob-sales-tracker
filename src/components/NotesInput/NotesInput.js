import React, { useContext, useState } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext';

function  NotesInput({ sale }) {

  const { saveToLocalStorage } = useContext(SalesListContext);
  const [notes, setNotes] = useState(sale.notes);


  return (
    <div className="col-2" style={ colStyles }>
      <input
        id={`notes_${ sale.saleId }`}
        style={ inputStyles }
        type="text"
        placeholder="Notes"
        onChange={ (event) => handleChange(event.target.value) }
        value={ notes }
      />
    </div>
  );

  function handleChange(input) {
    setNotes(input);
    sale.notes = input;
    saveToLocalStorage();
  }
}
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

export default NotesInput;
