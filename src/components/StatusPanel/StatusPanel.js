import React from 'react';
import './StatusPanel.css'

const StatusPanel = ({items}) => {
  const numOfTasks = items.length;
  const tasks = `${numOfTasks} task${numOfTasks - 1 ? 's' : ''} to-do`;
  const dones = items.reduce((acc, el) => {
    return acc = el.done ? ++acc : acc;
  }, 0) + ' done';
  const importants = items.reduce((acc, el) => {
    return acc = el.important ? ++acc : acc;
  }, 0) + ' important';

  return (
    <h5 className='status-panel mb-4'>
      {tasks} / {importants} / {dones}
    </h5>
  );
}

export default StatusPanel;