import React, {Component} from 'react';
import { DragDropContainer } from 'react-drag-drop-container';


export default class Draggable extends Component {
    render() {
      return (
        <div className="boxable_component">
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label}}
            customDragElement={this.props.customDragElement}
            onDrop={(e)=>(console.log(e))}
          >
            <img src={this.props.image}  />
          </DragDropContainer>
        </div>
      );
    }
  }