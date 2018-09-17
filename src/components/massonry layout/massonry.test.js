import React from 'react';
import ReactDOM from 'react-dom';
import MassonryLayout from './';
import MasonryColumns from './massonryColumns';
import MassonryTile from './massonryTile';

it('renders MassonryLayout without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MassonryLayout images={[]}  brakePoints = {[350, 500, 750]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders MasonryColumns without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MasonryColumns > {[]} </MasonryColumns>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders MassonryTile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MassonryTile/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  