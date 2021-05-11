import React from 'react';

const Task = (props) => {
  return (
    <div style={task}>
      <input id={props.taskInfo.company} type="text" placeholder="Company name" value={props.taskInfo.email}></input>
      <input id={props.taskInfo.quoteId} type="text" placeholder="Quote ID" value={props.taskInfo.quoteId}></input>
      <input id={props.taskInfo.email} type="text" placeholder="Email" value={props.taskInfo.email}></input>
      <input id={props.taskInfo.phone} type="text" placeholder="Phone Number" value={props.taskInfo.phone}></input>
    </div>
  );
};


const task = {
  backgroundColor: '#565656',
}

export default Task;