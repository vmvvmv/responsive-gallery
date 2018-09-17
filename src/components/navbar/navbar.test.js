import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './';
import "firebase/storage";


it('renders Navbar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar/>, div);
    ReactDOM.unmountComponentAtNode(div);
});