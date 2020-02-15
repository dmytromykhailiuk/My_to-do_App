import React from 'react';
import './Navigation.css';

const Navigation = ({onChangeNavItem, navItems}) => {
  const {All, Active, Done} = navItems;
  const itemAllClasses = `item__first nav__item ${All ? 'active' : ''}`;
  const itemActiveClasses = `nav__item ${Active ? 'active' : ''}`;
  const itemDoneClasses = `item__last nav__item ${Done ? 'active' : ''}`;
  return (
    <nav 
      className="nav d-flex justify-content-between"
      onClick={(e) => onChangeNavItem(e.target.textContent)}
    >
      <div className={itemAllClasses}>All</div>
      <div className={itemActiveClasses}>Active</div>
      <div className={itemDoneClasses}>Done</div>
    </nav>
  )
}

export default Navigation;