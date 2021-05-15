import React, { useContext } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext';
import Flatpickr from "react-flatpickr";
import "./flatpickr.css";

function CalendarInput({ sale, value, placeholder, field, setField }) {

  const { saveToLocalStorage } = useContext(SalesListContext);

  return (
    <div className="col" style={ colStyles }>
          <Flatpickr
            options={ flatPickrOptions }
            placeholder={ placeholder }
            style={ inputStyles }
            value={ field }
            onChange={ date => {
              setField(date);
              sale[value] = date;
              saveToLocalStorage();
            }}
          />
        </div>
  );
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

const flatPickrOptions = {
  enableTime: false,
  dateFormat: "D d/m/y",
  monthSelectorType: "static",
  disableMobile: true,
}

export default CalendarInput
