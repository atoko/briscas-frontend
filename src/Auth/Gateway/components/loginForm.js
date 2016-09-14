import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit() {
		let data = {
			username: this.refs.username.getValue(),
			password: this.refs.password.getValue()
		};
		this.props.onSubmit(data);
	}
	render() {
		return <div>
			<div>
				<TextField hintText="Username" ref="username"/>
				<br />
				<TextField hintText="Password" ref="password"/>
				<RaisedButton onClick={this.onSubmit} label="Log in" fullWidth={true} />
			</div>
			<br />
			<div>
				{this.props.status}
				<RaisedButton label="Full width" fullWidth={true} />				
			</div>			
		</div>
	}
}

export default LoginForm;