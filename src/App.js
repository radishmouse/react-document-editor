import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import documents from './documents';
import DocumentList from './DocumentList';
import DocumentEditor from './DocumentEditor';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: documents.slice(),   // make a copy of the documents array
      currentIndex: 0
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
          clickHandler={this._setCurrentIndex}
        />
        <DocumentEditor
          document={this.state.docs[this.state.currentIndex]}
        />
      </div>
    );
  }

  _setCurrentIndex = (newIndex) => {
    this.setState({
      currentIndex: newIndex
    }, () => {
      console.log(`updated currentIndex to ${newIndex}`)
    });
  };
}

export default App;
