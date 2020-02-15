import React from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem'

const ToDoList = ({items, OnImportant, OnDone, OnDelete}) => {
  return (
    <ul className="todolist list-group mt-4">
      {items.map((item, id) => {
        return (
          <ToDoItem 
            item={item} 
            key={item.id}
            OnImportant={() => OnImportant(id)}
            OnDone={() => OnDone(id)}
            OnDelete={() => OnDelete(id)}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;