import React from 'react';
import Sale from '../Sale/Sale';

function SaleList() {
  return (
    <div style={ divStyle }>
      { salesArray.map(sale => <Sale saleInfo={ sale } key={ sale.saleId}/>)}
    </div>
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
      subs: 3,
      bankFeed: 2,
      cloudFile: 1,
      PDO: 0,
      OAQ: 4,
      STP: 2,
      offlineFile: 1,
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
      subs: 5,
      bankFeed: 1,
      cloudFile: 2,
      PDO: 1,
      OAQ: 2,
      STP: 4,
      offlineFile: 1,
    },
  },
];

export default SaleList;