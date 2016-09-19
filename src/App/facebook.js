import React, {Component} from "react";
import FacebookLogin from './libs/react-facebook-login';
import Post from '../Auth/Gateway/containers/post';

class Facebook extends Component {
	login = (data) => {
		if (this.props.onLogin) {
			const login = {
				id: data.return_id
			}
			this.props.onLogin(login);
		}		
		return null;
	}
	render() {
		return <Post url="auth/login" on200={this.login}><FacebookInitialLoad /></Post>
	}
}

class FacebookInitialLoad extends Component {
	onSubmitFacebook = (response) => {
		let data = {
			username: response.email,
			password: response.accessToken,
			provider: "facebook"
		};
		this.props.onSubmit(data);
	}  	
	render() {
		return <div 
			style={{
				display: "none"
			}}>
				<FacebookLogin
					appId={"1201115049955824"}	
	    			fields="name,email"
					autoLoad={true}
					callback={this.onSubmitFacebook}
				/>      
			</div>
	}
}

export default Facebook;