import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';

import './loginForm.css' 

class LoginForm extends Component {
	constructor() {
		super();
		this.state = {open: false};
	}
	onSubmit = () => {
		let data = {
			username: this.refs.username.getValue(),
			password: this.refs.password.getValue()
		};
		this.props.onSubmit(data);
	}
	renderMessage = () => {
		if (this.props.status != null) 
		{
			return <div>
				{this.props.post.message}
			</div>
		}

		return null;
	}
	render() {
		const subheaderStyle = {
			paddingLeft: '0px'
		};
		const inputStyle = {
			paddingLeft: '5px'
		}

		return <div className="form">
			<div className="login">
				<br/>
				<RaisedButton
				primary={true} 
				label="Log in with Facebook"
				icon={<FontIcon className="fa fa-facebook" />}
				/> 
			</div>			
			<div className="login">
     			<Subheader style={subheaderStyle}>or</Subheader>			
				<FontIcon className="fa fa-user" />
				<TextField style={inputStyle} hintText="Username" ref="username"/>
				<br />
				<FontIcon className="fa fa-key" />
				<TextField style={inputStyle} hintText="Password" ref="password"/>
				<br />
				<RaisedButton onClick={this.onSubmit} label="Log in" primary={true} fullWidth={true}/>

				<div className="auth">
					<p/>
					<RaisedButton label="Forgot password?"/>		
					<RaisedButton label="Register" secondary={true}/>
				</div>				
			</div>

			{this.renderMessage()}			
		</div>
	}
}

export default LoginForm;