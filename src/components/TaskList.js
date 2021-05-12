import React from 'react';
import Task from './Task';
// import ColumnHeaders from './ColumnHeaders/ColumnHeaders';

function TaskList() {
  return (
    <div style={ divStyle }>
      { tasksArray.map(task => <Task taskInfo={ task } key={ task.taskId}/>)}
    </div>
  );
};

const divStyle = {
  margin: '0rem 0.25rem',
}

const tasksArray = [
  {
  taskId: '1',
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
  taskId: '2',
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

export default TaskList;