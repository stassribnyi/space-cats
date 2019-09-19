import React, { Component } from 'react';

import { CardList, SearchBox } from './components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ cats: users }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchField: target.value });
  };

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='app'>
        <h1 className='app__header'>Space Cats</h1>
        <SearchBox
          id='searchCats'
          name='searchCats'
          placeholder='Search Cats'
          onChange={this.handleChange}
        />
        <CardList items={filteredCats} />
      </div>
    );
  }
}

export default App;
