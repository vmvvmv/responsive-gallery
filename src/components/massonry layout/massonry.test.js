import React from 'react';
import ReactDOM from 'react-dom';
import MassonryLayout, {MasonryItems} from './massonry';


it('renders MassonryLayout without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MassonryLayout images={[]}  brakePoints = {[350, 500, 750]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders MasonryItems without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MasonryItems brakePoints = {[350, 500, 750]}>{[]}</MasonryItems>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  