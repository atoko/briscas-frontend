import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const initialState = {
	data: null,
	request: null,
	status: null,
	json: null,
	redirect: null
};

class Post extends Component {
	constructor() {
		super();
		this.state = initialState;
	}	
	render() {
		return React.cloneElement(this.props.children, {
				onSubmit: this.submit,
				request: this.state.data,
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

			fetch(`/${this.props.url}`, {
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
				this.setState(initialState);						
				throw new Error(`${this.props.url} ${response.status}`);						
			})
			.then((json) => {
				let redirect = null;
				if (response.status === 200) {
					if (this.props.on200) {
						switch (typeof this.props.on200) {
							case "string":
								redirect = this.props.on200;
								break;
							case "function":
								redirect = this.props.on200(json);
								break;
							default:
								break;
						}
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