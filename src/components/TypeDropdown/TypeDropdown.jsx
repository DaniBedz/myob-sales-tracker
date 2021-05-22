import React from 'react';

const buttonStyle = {
  color: 'white',
  width: '100%',
  textAlign: 'center',
};

function dynamicTypeValue(sale) {
  let typeValue;
  if (sale.potentialSales === 0 && sale.quoteId === '') {
    typeValue = 'None';
  }
  if (sale.potentialSales !== 0 && sale.quoteId === '') {
    typeValue = 'Utilisation';
  }
  if (sale.potentialSales === 0 && sale.quoteId !== '') {
    typeValue = 'Quote';
  }
  if (sale.utilisations.subs !== 0) {
    typeValue = 'Quote';
  }
  if (sale.potentialSales !== 0 && sale.quoteId !== '') {
    typeValue = 'Both';
  }
  if (
    sale.utilisations.sub !== 0 &&
    Object.values(sale.utilisations).reduce((prev, curr) => prev + curr) > 1
  ) {
    typeValue = 'Both';
  }
  return typeValue;
}

function TypeDropdown({ sale }) {
  return (
    <div className="col" style={buttonStyle}>
      {dynamicTypeValue(sale)}
    </div>
  );
}

export default TypeDropdown;
