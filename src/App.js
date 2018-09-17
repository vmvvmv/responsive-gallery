import React, { Component } from 'react';
import './App.css';
import {firebaseApp} from './firebase';
import MassonryLayout from './components/massonry layout';
import Navbar from './components/navbar';

const brakePoints = [350, 500, 750];

class App extends Component {

  state = {
    images:[]
  };

  componentDidMount() {
    const itemsRef = firebaseApp.database().ref('images');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          url: items[item].url,
        });
      }
      this.setState({
        images: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <MassonryLayout images = {this.state.images} brakePoints={brakePoints} /> 
      </div>
    );
  }
}

export default App;
