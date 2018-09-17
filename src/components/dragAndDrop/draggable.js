import React, {Component} from 'react';
import { DragDropContainer } from 'react-drag-drop-container';
import PropTypes from 'prop-types';

class Draggable extends Component {

  render() {
    return (
      <div>
        <DragDropContainer
          targetKey={this.props.targetKey}
          dragData={{label: this.props.label}}
          customDragElement={this.props.customDragElement}
          onDrop={this.props.onDrop}
        >
          {this.props.children}
        </DragDropContainer>
      </div>
    );
  }
}

Draggable.propTypes = {
  onDrop: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  targetKey: PropTypes.string.isRequired
}

export default  Draggable;