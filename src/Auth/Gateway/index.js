import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import Post from './containers/post';
import Login from './components/loginForm';

class Gateway extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (<Paper style={{
				maxWidth: '800px',
				height: '400px',
				margin: 'auto',
				marginTop: '8px',
				backgroundColor:'#FAFAFA'
			}} 
			 zDepth={2}
			>
			<Tabs>
				<Tab label="Login" >
					<Post><Login /></Post>
				</Tab>
				<Tab label="Register" >
					<div>
					<h2>Tab Two</h2>
					<p>
						This is another example tab.
					</p>
					</div>
				</Tab>
			</Tabs>
		</Paper>);
	}
}

export default Gateway