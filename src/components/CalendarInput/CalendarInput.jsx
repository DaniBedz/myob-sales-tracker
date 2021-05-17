import React, { useContext, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { SalesListContext } from '../SaleList/SalesListContext';
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

  return (
    <div className="col" style={colStyles}>
      <Flatpickr
        options={flatPickrOptions}
        placeholder={placeholder}
        style={inputStyles}
        value={date}
        onChange={(dateValue) => {
          setDate(dateValue);
          sale[value] = dateValue;
          saveSalesToLocalStorage();
        }}
      />
    </div>
  );
}

export default CalendarInput;
