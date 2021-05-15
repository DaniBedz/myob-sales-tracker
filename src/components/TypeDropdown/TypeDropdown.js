import React, { useState, useContext } from 'react';
import { SalesListContext } from '../SaleList/SalesListContext';
import Dropdown from 'react-bootstrap/Dropdown';

function TypeDropdown({ sale }) {
  const { saveToLocalStorage } = useContext(SalesListContext);
  const [input, setInput] = useState(sale.type);

  return (
      <Dropdown className="col" style={ dropDownStyle }>
        <Dropdown.Toggle style={ buttonStyle } id={ `$type_${ sale.saleId }` }>{ input }</Dropdown.Toggle>
        <Dropdown.Menu style={ menuStyle }>
          <Dropdown.Item style={ buttonStyle } onSelect={(value) => saveValue(value)} eventKey="None">None</Dropdown.Item>
          <Dropdown.Item style={ buttonStyle } onSelect={(value) => saveValue(value)} eventKey="Quote">Quote</Dropdown.Item>
          <Dropdown.Item style={ buttonStyle } onSelect={(value) => saveValue(value)} eventKey="Utilisation">Utilisation</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );

  function saveValue(selectedValue) {
    setInput(selectedValue);
    sale.type = selectedValue;
    saveToLocalStorage();
  }
}

const dropDownStyle = {
  margin: '2px',
  width: '100%',
  color: 'white',
  textAlign: 'center',
}


const menuStyle = {
  backgroundColor: '#565656',
}

const buttonStyle = {
  color: 'white',
  width: '100%',
}

export default TypeDropdown;
