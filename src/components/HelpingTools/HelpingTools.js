import React from 'react';
import SearchPanel from "../SearchPanel";
import StatusPanel from "../StatusPanel";
import Navigation from "../Navigation";

const HelpingTools = ({todos, onSecrchChange, serchVal, navItems, onChangeNavItem}) => {
  return (
    <header className='header'>
      <div className='header__statys-panel text-right'>
        <StatusPanel items={todos}/>
      </div>
      <div className='header__wrap d-flex justify-content-between'>
        <SearchPanel 
          onSecrchChange={onSecrchChange}
          inputVal={serchVal}
        />
        <Navigation
          onChangeNavItem={onChangeNavItem}
          navItems={navItems}
        />
      </div>
    </header>
  );
}

export default HelpingTools;