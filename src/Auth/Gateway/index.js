import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Post from './containers/post';
import LoginForm from './components/loginForm';
import GuestForm from './components/guestForm';

class Gateway extends Component {
	constructor(props) {
		super();
		this.state = {tab:'guest'};
		//doLogout(); this.props.location.query.hasProperty("logout")
	}
	changeTab = (tab) => {
		if (typeof tab === "string") {
			this.setState({
				tab
			});
		}
	}
	render() {
		return (<Paper style={{
				height: '400px',
				margin: 'auto',
				backgroundColor:'#FAFAFA'
			}} 
			 zDepth={1}
			>
			<Tabs
				value={this.state.tab}
				onChange={this.changeTab}>
				<Tab label="Guest" value="guest">
					<Post url="auth/anonymous">
						<GuestForm onDismiss={() =>{ this.changeTab("login");}}/>
					</Post>				
				</Tab>
				<Tab label="Login" value="login">
					<Post url="auth/login">
						<LoginForm />
					</Post>					
				</Tab>
			</Tabs>
		</Paper>);
	}
}

export default Gateway