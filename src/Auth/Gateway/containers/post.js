import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Post extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			request: null,
			status: null,
			json: null,
			redirect: null
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
			data,
			json: null,
			status: null
		});
	}
	componentWillUpdate(newProps, newState) {
		if (newState.redirect) {
			browserHistory.push(newState.redirect);			
		}		
	}
	componentDidUpdate() {
		if (this.state.data) {
			let response = null;

			fetch(`http://localhost:3000/${this.props.url}`, {
				headers: {
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
				let redirect = null;
				if (response.status === 200) {
					if (this.props.on200 && (typeof this.props.on200) === "string") {
						redirect = this.props.on200;
					}
				}	
				this.setState({
					data: null,
					request: this.state.data,					
					status: response.status,
					json,
					redirect
				});				
			});	
		}
	}
}

export default Post;