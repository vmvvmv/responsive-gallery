import React, {Component} from 'react';
import { DropTarget } from 'react-drag-drop-container';
import PropTypes from 'prop-types';

class DragBox extends Component {
    render() {
      return (
        <div>
          <DropTarget targetKey={this.props.targetKey}  > 
            {this.props.children}
          </DropTarget>
        </div>
      );
    }
}

DragBox.propTypes = {
  targetKey: PropTypes.string.isRequired
}

export default DragBox;