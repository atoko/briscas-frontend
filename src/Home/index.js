import React, { Component } from 'react';
import Menu from '../Brisca/components/menu';
import Post from '../App/containers/post';

class Home extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (<div>
			<h1>Hi! This page should compose some other views</h1>
			<Post url="briscas/join" on200={(game)=>{ return `brisca/${game.id}`}}><Menu/></Post>
		</div>);
	}
}

export default Home