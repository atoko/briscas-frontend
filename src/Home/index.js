import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';


class Home extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (<div>
			<h1>Hi! This page should compose some other views</h1>
			<h2> You are {false ? "" : "not"} logged in </h2>
		</div>);
	}
}

export default Home