import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MassonryTile from './massonryTile';
import MasonryColumns from './massonryColumns';
import './massonry.css';

class MassonryLayout extends Component{
	
	render(){
		return (
			<div className="container">
				<div className="masonry-container">
					<MasonryColumns>
						{this.props.images.map((image) => {
							return (
								<MassonryTile key={image.id} src={image.url} id={image.id}/>
							) 
						})}
					</MasonryColumns>
				</div>
			</div>
		)
	}
}

MassonryLayout.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MassonryLayout;