import faker from 'faker';
import { v4 as uuid } from 'uuid';

function randomIndex(arraySize) {
  return Math.floor(Math.random() * arraySize);
}

function generateUser() {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  };
}

function generateTask() {
  return {
    id: uuid(),
    type: ['None', 'Utilisation', 'Quote'][randomIndex(3)],
    company: faker.company.companyName(),
    quoteId: faker.datatype.number(),
    email: faker.internet.email(),
    clientId: faker.datatype.number(),
    quoteExpiry: faker.date.soon(),
    saleDate: faker.date.soon(),
    potentialSales: faker.datatype.number({max: 100}),
    Notes: faker.lorem.sentence(),
    utilisations: {
      subs: 0,
      bankFeed: 0,
      cloudFile: 0,
      PDO: 0,
      OAQ: 0,
      STP: 0,
      offlineFile: 0,
    },
  };
}


export {generateUser, generateTask};