import React from 'react';
import './Bar.css';

class Bar extends React.Component{
	render(){
		const counter = this.props.total;
		return(
			<div className="bar-container">
				<div className={this.props.barClass} style={{'animation-iteration-count': counter.toString()}}></div>
			</div>
		);
	}
}

export default Bar;