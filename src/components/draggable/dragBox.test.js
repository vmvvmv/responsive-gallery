import React from 'react';
import ReactDOM from 'react-dom';
import DragBox from './dragBox';

it('renders DragBox without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DragBox />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  