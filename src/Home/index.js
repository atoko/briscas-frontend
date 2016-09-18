import React, { Component } from 'react';

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