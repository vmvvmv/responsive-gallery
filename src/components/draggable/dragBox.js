import React, {Component} from 'react';
import shortid from 'shortid';
import { DropTarget } from 'react-drag-drop-container';

export default class DragBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    handleDrop = (e) => {
      let items = this.state.items.slice();
      items.push({label: e.dragData.label, uid: shortid.generate()});
      this.setState({items: items});
      e.containerElem.style.visibility="hidden";
    };
  
  
    render() {
      return (
        <div className="component_box">
       
              <DropTarget
                onHit={this.handleDrop}
                targetKey={this.props.targetKey}
                dropData={{name: this.props.name}}
              > 
              <div>
                <div className="box">
                </div>
              </div>
              </DropTarget>
        </div>
      );
    }
  }