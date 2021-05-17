import React, { useContext, useState } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

const inputStyles = {
  backgroundColor: '#484848',
  border: '2px solid #343a40',
  color: 'white',
  borderRadius: '7px',
  width: '16%',
  textAlign: 'center',
  margin: '2px',
  height: '1.87rem',
  position: 'absolute',
};

const colStyles = {
  zIndex: '1',
};

function NotesInput({ sale }) {
  const { saveSalesToLocalStorage } = useContext(SalesListContext);
  const [notes, setNotes] = useState(sale.notes);

  function handleChange(input) {
    setNotes(input);
    sale.notes = input;
    saveSalesToLocalStorage();
  }

  return (
    <div className="col-2" style={colStyles}>
      <textarea
        id={`notes_${sale.saleId}`}
        style={inputStyles}
        className="notes-input"
        type="text"
        placeholder="Notes"
        onChange={(event) => handleChange(event.target.value)}
        value={notes}
      />
    </div>
  );
}

export default NotesInput;
