import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
		fetch(`/${this.props.url}`, {
				headers: {
					'Accept': 'application/json',
				},		
				credentials: 'include',		
				method: 'GET',
				cache: 'default'
		})
		.then((response) => {
			if (response.status === 401) {
				if (this.props.on401 && (typeof this.props.on401) === "string") {
					browserHistory.push(this.props.on401);
				}
				return null;
			}
			return response.json();
		})
		.then((data) => {
			if (data) {
				this.setState({
					...this.state,
					data
				})
			}
		});
	}	
}

export default Get;