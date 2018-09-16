import React, { Component } from 'react';
import './App.css';
import FileManagerContainer from './components/fileUpload/fileUplaod';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FileManagerContainer/>
      </div>
    );
  }
}

export default App;
