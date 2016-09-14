import React, { Component } from 'react';
class Get extends Component {
	constructor() {
		super();
		this.state = {data: []};
	}	
	render() {
		return React.cloneElement(this.props.children, {
				data: this.state.data
		});
	}

	componentDidMount() {
		fetch(`http://localhost:3000/${this.props.url}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			this.setState({
				...this.state,
				data
			})
		});
	}	
}

export default Get;