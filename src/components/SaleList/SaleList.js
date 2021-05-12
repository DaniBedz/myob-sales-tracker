import React from 'react';
import Sale from '../Sale/Sale';
import Utilisations from '../Utilisations/Utilisations';

function SaleList() {
  return (
    <>
      <div style={ divStyle }>
        { salesArray.map(sale => <Sale saleInfo={ sale } key={ sale.saleId}/>)}
      </div>
      <div style={ divStyle }>
        { salesArray.map(sale => <Utilisations saleInfo={ sale } key={ sale.saleId}/>)}
      </div>
    </>
  );
};

const divStyle = {
  margin: '0rem 0.25rem',
}

const salesArray = [
  {
  saleId: '1',
  company: 'Corp Tech',
  quoteId: '3123423',
  email: 'info@corp.tech',
  phone: '0405303853',
  quoteExpiry: '01/01/1990',
  status: 'none',
  saleDate: '01/01/1990',
  potentialSales: '1',
  utilisations:
    {
      subs: 0,
      bankFeed: 0,
      cloudFile: 0,
      PDO: 0,
      OAQ: 0,
      STP: 0,
      offlineFile: 0,
    },
  },
  {
  saleId: '2',
  company: 'Jims Mowing',
  quoteId: '2342525',
  email: 'info@jimsmowing.com',
  phone: '0434525316',
  quoteExpiry: '01/01/1990',
  status: 'none',
  saleDate: '01/01/1990',
  potentialSales: '1',
  utilisations:
    {
      subs: 0,
      bankFeed: 0,
      cloudFile: 0,
      PDO: 0,
      OAQ: 0,
      STP: 0,
      offlineFile: 0,
    },
  },
];

export default SaleList;