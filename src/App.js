import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.todos.length}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos}
}

export default connect(mapStateToProps)(App);
