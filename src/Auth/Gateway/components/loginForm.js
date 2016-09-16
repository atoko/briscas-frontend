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
		this.state = {error: false};
	}
	onSubmit = () => {
		let data = {
			username: this.refs.username.getValue(),
			password: this.refs.password.getValue()
		};
		this.props.onSubmit(data);
	}
	renderMessage = () => {
		if (this.state.error) 
		{
			return <div>
				{this.props.post.message}
			</div>
		}

		return <div style={{visibility:'hidden'}}>N/A</div>;
	}
	resetState = () => {
		this.setState({
			error: false
		});
	}
	render() {
		const subheaderStyle = {
			paddingLeft: '0px'
		};
		const inputStyle = {
			paddingLeft: '5px'
		}
		const formClass = this.state.error ? "shake" : "";

		return <div className="form">
			<div className="login">
				<br/>
				<RaisedButton
					label="Log in with Facebook"
					icon={<FontIcon className="fa fa-facebook" />}
					backgroundColor="#3b5998"
					labelColor="white"
				/> 
     			<Subheader style={subheaderStyle}>%or%</Subheader>		
			</div>			
			<div className={"login " + formClass}
				style={{
					padding:'5px'
				}}
			>	
				<FontIcon className="fa fa-user" />
				<TextField onChange={this.resetState} style={inputStyle} hintText="%Username%" ref="username"/>
				<br />
				<FontIcon className="fa fa-key" />
				<TextField onChange={this.resetState} style={inputStyle} hintText="%Password%" ref="password"/>
				<br />
				<RaisedButton onClick={this.onSubmit} label="%Log in%" primary={true} fullWidth={true}/>
				{this.renderMessage()}					
			</div>

				<div className="auth">
					<p/>
					<RaisedButton label="%Forgot password?%"/>		
					<RaisedButton label="%Sign up%" secondary={true}/>
				</div>		
		</div>
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.post) {
			this.setState({
				error: nextProps.post.success === false
			})
		}
	}
}

export default LoginForm;