import React, { useContext, useState, useRef } from 'react';
import Flatpickr from 'react-flatpickr';
import { SalesListContext } from '../Contexts/SalesListContext';
import './flatpickr.css';

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
};

const flatPickrOptions = {
  enableTime: false,
  dateFormat: 'D d/m/y',
  monthSelectorType: 'static',
  disableMobile: true,
};

function CalendarInput({ sale, value, placeholder }) {
  const { saveSalesToLocalStorage } = useContext(SalesListContext);
  const [date, setDate] = useState(sale[value]);
  const calendarInput = useRef(null);

  function addHighlight() {
    const highlightedField = document.querySelector(
      `#${calendarInput.current.node.id}`
    );

    highlightedField.classList.add('highlighted');

    function removeClass() {
      highlightedField.classList.remove('highlighted');
      document.body.removeEventListener('click', removeClass);
      document.body.removeEventListener('keydown', removeClass);
    }
    document.body.addEventListener('click', removeClass);
    document.body.addEventListener('keydown', removeClass);
  }

  return (
    <div className="col" style={colStyles}>
      <Flatpickr
        id={`${value}_${sale.saleId}`}
        ref={calendarInput}
        options={flatPickrOptions}
        placeholder={placeholder}
        style={inputStyles}
        value={date}
        onChange={(dateValue) => {
          addHighlight();
          setDate(dateValue);
          sale[value] = dateValue;
          saveSalesToLocalStorage();
        }}
      />
    </div>
  );
}

export default CalendarInput;
