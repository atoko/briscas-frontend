import React, { Component } from 'react';

class Post extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			request: null,
			status: null,
			json: null
		};
	}	
	render() {
		return React.cloneElement(this.props.children, {
				onSubmit: this.submit,
				post: this.state.json,
				status: this.state.status
		});
	}
	submit = (data) => {
		this.setState({
			data
		});
	}
	componentDidUpdate() {
		if (this.state.data) {
			let response = null;

			fetch(`http://localhost:3000/${this.props.url}`, {
				headers: {
				'Origin': 'brisca',
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				},		
				credentials: 'include',		
				method: 'POST',
				body: JSON.stringify(this.state.data),
				cache: 'default'
			})
			.then((res) => {
				response = res;
				return response.json();
			})
			.catch((err) => {
				throw new Error(`${this.props.url} 404`);
			})
			.then((json) => {
				this.setState({
					data: null,
					request: this.state.data,					
					status: response.status,
					json
				});				
			})
		}
	}
}

export default Post;