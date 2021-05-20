import React, { useContext, useState } from 'react';
import { SalesListContext } from '../Contexts/SalesListContext';

const inputStyles = {
  backgroundColor: '#484848',
  border: '2px solid #343a40',
  color: 'white',
  borderRadius: '7px',
  width: '98%',
  textAlign: 'center',
  margin: '2px',
  height: '1.87rem',
  position: 'relative',
  zIndex: '1',
};

const colStyles = {
  zIndex: '1',
  position: 'relative',
};

function NotesInput({ sale }) {
  const { saveSalesToLocalStorage } = useContext(SalesListContext);
  const [notes, setNotes] = useState(sale.notes);

  function handleChange(input) {
    setNotes(input);
    sale.notes = input;
    saveSalesToLocalStorage();
  }

  let isClicked = false;

  function isClickedFalse() {
    isClicked = false;
  }
  function isClickedTrue() {
    isClicked = true;
  }

  function handleHover() {
    const itemId = `#item_${sale.saleId}`;
    const item = document.querySelector(itemId);
    item.style.height = '8rem';

    const utilId = `#util_${sale.saleId}`;
    const util = document.querySelector(utilId);
    util.style.top = '-4.035rem';
  }
  function handleHoverOut() {
    const itemId = `#item_${sale.saleId}`;
    const item = document.querySelector(itemId);
    item.style.height = '8rem';

    const utilId = `#util_${sale.saleId}`;
    const util = document.querySelector(utilId);
    util.style.top = '0rem';

    const notesId = `#notes_${sale.saleId}`;
    const notesField = document.querySelector(notesId);
    notesField.blur();
    if (isClicked) {
      notesField.focus();
      document.body.addEventListener('click', (e) => {
        if (!e.target.id.includes('notes')) {
          isClickedFalse();
          document.body.removeEventListener('click', isClickedFalse);
        }
      });
    } else {
      isClickedFalse();
      document.body.removeEventListener('click', isClickedFalse);
    }
  }

  return (
    <div className="col-2" style={colStyles}>
      <textarea
        id={`notes_${sale.saleId}`}
        style={inputStyles}
        className="notes-input"
        type="text"
        placeholder="Notes"
        onClick={isClickedTrue}
        onChange={(event) => handleChange(event.target.value)}
        value={notes}
        onMouseOver={handleHover}
        onFocus={handleHover}
        onMouseOut={handleHoverOut}
        onBlur={handleHoverOut}
      />
    </div>
  );
}

export default NotesInput;
