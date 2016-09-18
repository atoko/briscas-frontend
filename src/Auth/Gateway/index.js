import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';
import * as session from '../../App/store/ducks/session';

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
		
		if (this.props.onLogout) {
			this.props.onLogout();
		}
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
	login = (data) => {
		const redirect = this.props.location.query.hasOwnProperty("redirect") ? this.props.location.query["redirect"] : "/";
		if (this.props.onLogin) {
			const login = {
				id: data.return_id
			}
			this.props.onLogin(login);
		}
		return redirect;
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
				<Tab label="%Guest%" value="guest">
					<Post url="auth/anonymous" on200={this.login}>
						<GuestForm onDismiss={() =>{ this.changeTab("login");}}/>
					</Post>				
				</Tab>
				<Tab label="%Login%" value="login">
					<Post url="auth/login" on200={this.login}>
						<LoginForm />
					</Post>					
				</Tab>
			</Tabs>
		</Paper>);
	}
}

//
let mapStateToProps = null;
let mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (data) => {
			dispatch(session.login(data))
		},
		onLogout: () => {
			dispatch(session.logout())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Gateway)