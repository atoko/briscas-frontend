import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';

import FacebookLogin from '../../../App/libs/react-facebook-login';
import LinearProgress from 'material-ui/LinearProgress';

import './loginForm.css' 

class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			error: false,
			loading: false
		};
	}
	onSubmit = () => {
		let data = {
			username: this.refs.username.getValue(),
			password: this.refs.password.getValue()
		};
		this.props.onSubmit(data);
	}
	renderMessage = () => {
		if (this.state.error && this.props.post) 
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
	prepareLogin = () => {
		this.setState({
			loading: true
		});
	}
	facebookLogin = (response) => {
		console.log(response);
		if (this.state.loading) {
			this.onSubmitFacebook(response);
		}
		this.setState({
			loading: false
		});
	}
	onSubmitFacebook = (response) => {
		let data = {
			username: response.email,
			password: response.accessToken,
			provider: "facebook"
		};
		this.props.onSubmit(data);
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
				<FacebookLogin
					appId={"1201115049955824"}	
				    fields="name,email"
					autoLoad={false}
					icon={<FontIcon className="fa fa-facebook" />}				
					onClick={this.prepareLogin}	
					callback={this.facebookLogin}
					size="small"
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
				{this.props.request == null ? "" : <LinearProgress mode="indeterminate" />}
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
		} else {
			this.setState({
				error: false
			})			
		}
	}
}

export default LoginForm;