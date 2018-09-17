import React from 'react';
import ReactDOM from 'react-dom';
import FileUploadButton from './';
import "firebase/storage";


it('renders FileUploadButton without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FileUploadButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  