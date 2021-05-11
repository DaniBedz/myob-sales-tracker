import React from 'react';
import Task from './Task';

const TaskList = () => {
  return (
    <>
      { tasksArray.map(task => <Task taskInfo={ task } key={ task.taskId}/>)}
    </>
  );
};

const tasksArray = [
  {
  taskId: '1',
  company: 'Corp Tech',
  quoteId: '3123423',
  email: 'info@corp.tech',
  phone: '0405303853',
  },
  {
  taskId: '2',
  company: 'Jims Mowing',
  quoteId: '2342525',
  email: 'info@jimsmowing.com',
  phone: '0434525316',
  },
];

export default TaskList;