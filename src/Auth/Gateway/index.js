import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Post from './containers/post';
import LoginForm from './components/loginForm';
import GuestForm from './components/guestForm';

class Gateway extends Component {
	constructor(props) {
		super();
		this.state = {tab:'guest'};

	}
	doLogout = () => {
		fetch(`http://localhost:3000/auth/logout`, {
				headers: {
					'Accept': 'application/json',
				},		
				credentials: 'include',		
				method: 'GET',
				cache: 'default'
		});
		
		browserHistory.push("/");
	}
	componentWillMount() {
		if (this.props.location.query.hasOwnProperty("logout")) {
			this.doLogout();
		}
	}
	changeTab = (tab) => {
		if (typeof tab === "string") {
			this.setState({
				tab
			});
		}
	}
	render() {
		const redirect = this.props.location.query.hasOwnProperty("redirect") ? this.props.location.query["redirect"] : "/";
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
				<Tab label="%Guest%" value="guest">
					<Post url="auth/anonymous" on200={redirect}>
						<GuestForm onDismiss={() =>{ this.changeTab("login");}}/>
					</Post>				
				</Tab>
				<Tab label="%Login%" value="login">
					<Post url="auth/login" on200={redirect}>
						<LoginForm />
					</Post>					
				</Tab>
			</Tabs>
		</Paper>);
	}
}

export default Gateway