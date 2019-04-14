import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions/add';
import { toggleTodo } from './actions/toggle';
import { deleteTodo } from './actions/delete';

class App extends Component {
  state = {
    input: ''
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.input)

    this.setState({ input: '' });
  }

  toggle = index => {
    this.props.toggleTodo(index)
  }

  delete = (e, index) => {
    // odd behavior w/o this
    e.preventDefault()
    
    this.props.deleteTodo(index)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.input} />
        <input type="submit" value="Send"/>
        <ul>{this.props.todos.map((todo, i) => {
          return <li key={i} className={todo.completed ? 'done' : null}>
          <span onClick={() => this.toggle(i)}>{todo.value}</span>
          <button onClick={e => this.delete(e, i)}>delete</button>
          </li>})}</ul>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos}
}

export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(App);
