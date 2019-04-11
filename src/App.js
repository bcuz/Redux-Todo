import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions/add';
import { toggleTodo } from './actions/toggle';

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
    this.props.addTodo(this.state.input, this.props.todos.length)

    this.setState({ input: '' });
  }

  toggle = id => {
    this.props.toggleTodo(id)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.input} />
        <input type="submit" value="Send"/>
        {/* <ul>{this.props.todos.map(todo => <li onClick={() => this.props.toggleTodo(todo)} key={todo.id}>{todo.value}</li>)}</ul> */}
        <ul>{this.props.todos.map(todo => <li onClick={() => this.toggle(todo.id)} key={todo.id} className={todo.completed ? 'done' : null}>{todo.value}</li>)}</ul>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos}
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(App);
