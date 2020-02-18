import React from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem'

const ToDoList = ({items, onImportant, onDone, onDelete}) => {
  return (
    <ul className="todolist list-group mt-4">
      {items.map((item, id) => {
        return (
          <ToDoItem 
            item={item} 
            key={item.id}
            onImportant={() => onImportant(id)}
            onDone={() => onDone(id)}
            onDelete={() => onDelete(id)}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;