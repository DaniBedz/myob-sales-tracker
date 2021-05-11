import React from 'react';
import Task from './Task';

const TaskList = () => {
  return (
    <div style={styles}>
      <Task taskInfo={tasks}/>
    </div>
  );
};

const styles = {
  backgroundColor: '#565656',
}

const tasks = {
  company: 'Corp Tech',
  quoteId: '3123423',
  email: 'info@corp.tech',
  phone: '0405303853',
};

export default TaskList;