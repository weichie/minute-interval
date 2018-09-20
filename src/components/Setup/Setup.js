import React from 'react';
import { Link } from 'react-router-dom';

import './Setup.css';

class Setup extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ''}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		this.setState({value: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();

		this.props.history.push({
			pathname: '/start',
			state: { value: this.state.value }
		})
	}

	render(){
		return(
			<div className="setup">
				<h2>For how many minutes would you like a counter?</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="number" value={this.state.value} onChange={this.handleChange} />
					<input type="submit" value="Start" />
				</form>
			</div>
		);
	}
}

export default Setup;