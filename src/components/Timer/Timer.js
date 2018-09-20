import React from 'react';
import { Link } from 'react-router-dom';

import './Timer.css';
import logo from './logo.png';

class Timer extends React.Component{
	render() {
		let mins = (this.props.minutes < 1) ? '00' : '0' + this.props.minutes;
		let secs = (this.props.seconds >= 10 || this.props.seconds <= 0) ? this.props.seconds : '0' + this.props.seconds;

		return(
			<div className="timer">
				<div className="counter">
					<h1>{mins}:{secs}</h1>
					<h4>{this.props.current}/{this.props.total}</h4>
					<Link to="/">Set new timer</Link>
				</div>
				<footer>
					<a href="https://www.weichieprojects.com" rel="noopener noreferrer" target="_blank"><img src={logo} alt="WeichieProjects" /></a>
				</footer>
			</div>
		);
	}
}

export default Timer;