import React, { Component } from 'react';

const brakePoints = [350, 500, 750];

class MasonryColumns extends Component{

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
		return brakePoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, brakePoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.MasonryItems.offsetWidth);
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
			<div className="masonry" ref="MasonryItems">
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

export default MasonryColumns;