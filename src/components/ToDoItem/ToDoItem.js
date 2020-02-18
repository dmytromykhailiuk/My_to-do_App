import React from 'react';

const ToDoItem = ({item, onImportant, onDone, onDelete}) => {
  const {done, important, text} = item;
  const doneClass = done ? 'done' : '';
  const importantClass = important ? ' important' : '';
  const itemTextStyles = 'item__text ' + doneClass + importantClass;
  return (
    <li className='item list-group-item list-group-item-info d-flex justify-content-between'>
      <div 
        className={itemTextStyles}
        onClick={onDone}
      >{text}</div>
      <div>
        <button 
          type="button"
          className="btn btn-outline-success btn-sm mr-2"
          onClick={onImportant}
        ><i className='fa fa-exclamation' /></button>
        <button 
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDelete}
        ><i className='fa fa-trash' /></button>
      </div>
    </li>
  );
}

export default ToDoItem;