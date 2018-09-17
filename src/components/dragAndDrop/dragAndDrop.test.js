import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from './draggable';
import DragBox from './draggable';


it('renders Draggable without crashing', () => {
    const div = document.createElement('div');
    const wrap = (
      <Draggable targetKey="DragBox" label='test' onDrop={(e)=>(console.log(e))}>
          <img  alt="item" />
      </Draggable>
    )
    ReactDOM.render(wrap, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders DragBox without crashing', () => {
  const div = document.createElement('div');
  const wrap = (
    <DragBox targetKey="DragBox">
      <div className="trashBox"/>
    </DragBox>
  )
  ReactDOM.render(wrap, div);
  ReactDOM.unmountComponentAtNode(div);
});
  