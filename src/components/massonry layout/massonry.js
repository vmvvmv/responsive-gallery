
import React, { Component } from 'react';
import Draggable from '../draggable/draggable';
import DragBox from '../draggable/dragBox';
import './massonry.css';

const Tile = ({src}) => {
    return (
      <div className="tile">
            <Draggable targetKey="DragBox" label="orange" image={src}/>
      </div>
    );
  };

class MassonryLayout extends Component{
	render(){
		return (
			<div className="container">
                <div className="boxes">
                    <DragBox targetKey="DragBox"/>
                </div>
				<div className="masonry-container">
					<p>ReactJS Responsive/Modular MasonryItem Grid.</p>
					<MasonryItem brakePoints={this.props.brakePoints}>
						{this.props.images.map((image, id) => {
							return (
								<Tile src={image} />
							) 
						})}
					</MasonryItem>
				</div>
			</div>
		)
	}
}


class MasonryItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {columns: 1};
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
	}
	
	getColumns(w){
		return this.props.brakePoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.brakePoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.MasonryItem.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div className="masonry" ref="MasonryItem">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return <div key={i} >{child}</div>
							})}
						</div>
					)
				})}
			</div>
		)
	}
}


export default MassonryLayout;