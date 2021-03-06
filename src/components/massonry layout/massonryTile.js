import React from 'react';
import Draggable from '../dragAndDrop/draggable';
import {removeImageFromStorage} from '../../firebase';

const MassonryTile = ({src, id}) => {
    return (
      <div className="tile">
          <Draggable targetKey="DragBox" label={id} onDrop={(e)=>(removeImageFromStorage(e.dragData.label))}>
              <img src={src} alt="item" />
          </Draggable>
      </div>
    );
};

export default MassonryTile;