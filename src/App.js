import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import dummyDocuments from './documents';
import DocumentList from './DocumentList';
import DocumentEditor from './DocumentEditor';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: this._loadDocs(),   // make a copy of the documents array
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
        <button
          onClick={this._createNewDocument}
        >
          New Document
        </button>
        <DocumentList
          docs={this.state.docs}
          clickHandler={this._setCurrentIndex}
        />
        <DocumentEditor
          document={this.state.docs[this.state.currentIndex]}
          handleChange={this._setDocumentContent}
        />
      </div>
    );
  }

  _createNewDocument = () => {
    this.setState({
      currentIndex: this.state.docs.length,
      docs: [
        ...this.state.docs,
        {
          title: 'new doc',
          content: ''
        }
      ]
    })
  }

  _setCurrentIndex = (newIndex) => {
    this.setState({
      currentIndex: newIndex
    }, () => {
      console.log(`updated currentIndex to ${newIndex}`)
    });
  }

  _setDocumentContent = (newContent) => {
    console.log(newContent);
    const updatedDocuments = this.state.docs.map((d, i) => {
      if (i === this.state.currentIndex) {
        return {
          title: d.title,
          content: newContent
        }
      } else {
        return d;
      }
    });

    this.setState({
      docs: updatedDocuments
    }, () => {
      console.log(`updated document #${this.state.currentIndex}`);
      this._saveDocs();
    });
  }

  _saveDocs = () => {
    localStorage.setItem('react-docs/docs', JSON.stringify(this.state.docs));
  }

  _loadDocs = () => {
    let docs = JSON.parse(localStorage.getItem('react-docs/docs'));
    if (!docs) {
      docs = dummyDocuments.slice()
    }
    return docs;
  }
}

export default App;
