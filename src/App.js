import React, { Component } from 'react';

import { CardList } from './components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
