import React, {Component} from 'react';
import './FormPanel.css';

export default class FormPanel extends Component {
  state = {
    inputVal: ''
  }
  onChange = (val) => {
    this.setState(() => {
      return { inputVal: val }
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewToDo(this.state.inputVal);
    this.setState(() => {
      return { inputVal: '' };
    });
  }
  render() {
    const inputVal = this.state.inputVal;
    return (
      <form 
        className='form d-flex my-4'
        onSubmit={this.onSubmit}
      >
        <input 
          className='form__input form-control' 
          placeholder='Write new to-do'
          onChange={(e) => this.onChange(e.target.value)}
          value={inputVal}
        />
        <button className='form__btn btn  ml-2'>Add</button>
      </form>
    );
  }
}