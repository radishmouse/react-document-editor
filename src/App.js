import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import documents from './documents';
import DocumentList from './DocumentList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: documents.slice()   // make a copy of the documents array
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DocumentList
          docs={this.state.docs}
        />
      </div>
    );
  }
}

export default App;
