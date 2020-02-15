import React from 'react';
import './SearchPanel.css';

const SearchPanel = ({ onSecrchChange, inputVal }) => {
  return (
    <input 
      className='search-panel form__input form-control mr-2'  
      placeholder='Search'
      onChange={(e) => onSecrchChange(e.target.value)}
      value={inputVal}
    />
  );
}

export default SearchPanel;