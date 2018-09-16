import React from 'react';
import './Timer.css';

import logo from './logo.png';

class Timer extends React.Component{

	render() {
		return(
			<div className="timer">
				<div className="counter">
					<h1>{this.props.minutes}:{this.props.seconds}</h1>
					<h4>{this.props.current}/{this.props.total}</h4>
				</div>
				<footer>
					<a href="https://www.weichieprojects.com" rel="noopener noreferrer" target="_blank"><img src={logo} alt="WeichieProjects" /></a>
				</footer>
			</div>
		);
	}
}

export default Timer;