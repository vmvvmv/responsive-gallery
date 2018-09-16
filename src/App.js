import React, { Component } from 'react';
import './App.css';
import FileManagerContainer from './components/fileUpload/fileManager';


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
