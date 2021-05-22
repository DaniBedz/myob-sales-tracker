import React from 'react';

const buttonStyle = {
  color: 'white',
  width: '100%',
  textAlign: 'center',
};

function dynamicTypeValue(sale) {
  const numberOfUtilisations =
    Object.values(sale.utilisations).reduce((prev, curr) => prev + curr) -
    sale.utilisations.subs;

  let typeValue;
  if (sale.potentialSales === 0 && sale.quoteId === '') {
    typeValue = 'None';
  }
  if (sale.potentialSales !== 0 && sale.quoteId === '') {
    typeValue = 'Utilisation';
  }
  if (
    sale.utilisations.subs !== 0 ||
    (sale.potentialSales === 0 && sale.quoteId !== '')
  ) {
    typeValue = 'Quote';
  }
  if (
    (sale.potentialSales !== 0 && sale.quoteId !== '') ||
    (sale.utilisations.subs !== 0 && numberOfUtilisations > 0)
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
