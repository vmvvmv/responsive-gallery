import React, {Component} from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import {firebaseApp} from '../../firebase/firebase';


export default class Draggable extends Component {

    removeItem(itemId) {
      const itemRef = firebaseApp.database().ref(`/images/${itemId}`);
      itemRef.remove();
    }

    render() {
      return (
        <div className="boxable_component">
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label}}
            customDragElement={this.props.customDragElement}
            onDrop={(e)=>(this.removeItem(e.dragData.label))}
            // e.dragData.label
          >
            <img src={this.props.image} alt="item" />
          </DragDropContainer>
        </div>
      );
    }
  }