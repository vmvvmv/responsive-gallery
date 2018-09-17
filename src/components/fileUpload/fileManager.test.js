import React from 'react';
import ReactDOM from 'react-dom';
import FileManager from './fileManager';
import "firebase/storage";


it('renders FileManager without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FileManager />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  