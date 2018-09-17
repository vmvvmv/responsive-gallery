import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Draggable from './draggable';

 
it('draggable div with image inside', () => {
  const wrapper = shallow(<Draggable/>);
  const image = <img alt="item" />;
  expect(wrapper.contains(image)).toEqual(true);
});

it('renders Draggable without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Draggable />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  