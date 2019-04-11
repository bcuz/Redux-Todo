import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  state = {
    input: ''
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleInputChange} value={this.state.input} />
        <input type="submit" value="Send"/>
        <ul></ul>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos}
}

export default connect(mapStateToProps)(App);
