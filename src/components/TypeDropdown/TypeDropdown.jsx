import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { SalesListContext } from '../Contexts/SalesListContext';

const dropDownStyle = {
  margin: '2px',
  width: '100%',
  color: 'white',
  textAlign: 'center',
};

const menuStyle = {
  backgroundColor: '#565656',
};

const buttonStyle = {
  color: 'white',
  width: '100%',
  height: '1.91rem',
};

function TypeDropdown({ sale }) {
  const { handleChange } = useContext(SalesListContext);
  const [input, setInput] = useState(sale.type);

  function saveValue(selectedValue) {
    setInput(selectedValue);
    sale.type = selectedValue;
    handleChange(selectedValue, 'type', sale);
  }

  return (
    <Dropdown className="col" style={dropDownStyle}>
      <Dropdown.Toggle style={buttonStyle} id={`type_${sale.saleId}`}>
        {input}
      </Dropdown.Toggle>
      <Dropdown.Menu style={menuStyle}>
        <Dropdown.Item
          style={buttonStyle}
          onSelect={(value) => saveValue(value)}
          eventKey="None"
        >
          None
        </Dropdown.Item>
        <Dropdown.Item
          style={buttonStyle}
          onSelect={(value) => saveValue(value)}
          eventKey="Quote"
        >
          Quote
        </Dropdown.Item>
        <Dropdown.Item
          style={buttonStyle}
          onSelect={(value) => saveValue(value)}
          eventKey="Utilisation"
        >
          Utilisation
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TypeDropdown;
