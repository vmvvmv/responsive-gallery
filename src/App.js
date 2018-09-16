import React, { Component } from 'react';
import './App.css';
import MassonryLayout from './components/massonry layout/massonry';


let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643, 777, 999, 1, 402];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <MassonryLayout images = {images} brakePoints={brakePoints} />
      </div>
    );
  }
}

export default App;
