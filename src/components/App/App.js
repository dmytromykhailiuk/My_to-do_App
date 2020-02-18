import React, {Component} from 'react';
import './App.css';
import HelpingTools from '../HelpingTools';
import ToDoList from "../ToDOList";
import FormPanel from "../FormPanel";

export default class App extends Component {
  state = {
    serchVal: '',
    nav: { All: true, Active: false, Done: false },
    todos: localStorage.getItem('todos') ? 
      JSON.parse(localStorage.getItem('todos')) : [],
    currentId: Number(localStorage.getItem('currentId')) ? 
      Number(localStorage.getItem('currentId')) : 1
  }
  onChangeNavItem = (el) => {
    this.setState(() =>{
      const newNav = { All: false, Active: false, Done: false}
      newNav[el] = true;
      return { nav: newNav }
    });
  }
  addNewToDo = (name) => {
    const todos = this.state.todos.slice();
    if (name && !todos.some(({text}) => text === name )) {
      const newToDo = {
        text: name, important: false, done: false, id: this.state.currentId
      };
      this.setState(({todos}) =>{
        return { todos: [...todos, newToDo], currentId: this.state.currentId + 1 };
      });
    }
  }
  onImportant = (index) => {
    const todos = this.state.todos.slice();
    const changedItem = {...todos[index]};
    if (!changedItem.done) {
      changedItem.important = !changedItem.important;
      this.setState(() => {
        return { todos: [ 
          ...todos.slice(0, index), changedItem, ...todos.slice(index + 1) 
        ]};
      });
    }
  }
  onDone = (index) => {
    const todos = this.state.todos.slice();
    const changedItem = {...todos[index]};
    changedItem.done = !changedItem.done;
    changedItem.important = false;
    this.setState(() => {
      return { todos: [ 
        ...todos.slice(0, index), changedItem, ...todos.slice(index + 1) 
      ]};
    });
  }
  onDelete = (index) => {
    const todos = this.state.todos.slice();
    this.setState(() => {
      return { 
        todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
        currentId: this.state.currentId - 1
      };
    });
  }
  onSecrchChange = (val) => {
    this.setState(() => {
      return { serchVal: val }
    })
  }
  filterTodos = (todos, navItems) => {
    let renderList = (navItems.Done ? todos.filter(el => el.done ) 
      : ( navItems.Active ? todos.filter(el => !el.done ) : todos ))
    return renderList;
  }
  render() {
    const navItems = this.state.nav;
    const todos = this.state.todos;
    const serchVal = this.state.serchVal;
    const searchFilter = todos.filter(el => el.text.toUpperCase()
      .indexOf(serchVal.toUpperCase()) > -1);
    const renderList = this.filterTodos(searchFilter, navItems);
    const tools = todos.length === 0 ? null : (
      <HelpingTools 
        todos={todos} 
        serchVal={serchVal} 
        navItems={navItems} 
        onSecrchChange={this.onSecrchChange} 
        onChangeNavItem={this.onChangeNavItem}
      />
    );
    localStorage.setItem('currentId', this.state.currentId);
    localStorage.setItem('todos', JSON.stringify(todos));
    return (
      <div className='app d-flex justify-content-center'>
        <div className='wraper'>
          <h1 className='header__title text-center mb-5'>My to-do App</h1>
          { tools }
          <main className='main'>
            <ToDoList 
              items={renderList} 
              onImportant={this.onImportant}
              onDone={this.onDone}
              onDelete={this.onDelete}
            />
            <div className='main__form'>
              <FormPanel  addNewToDo={ this.addNewToDo }/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
