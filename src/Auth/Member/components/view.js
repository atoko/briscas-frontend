import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class View extends Component {
	getProp = (prop) => {
		if (this.props.data) {
			return this.props.data[prop];
		}

		return null;
	}
	render() {
		return <Paper style={{
				margin: 'auto'
			}} 
			 zDepth={2}
			>
			<TextField
				floatingLabelText="Display Name"
				floatingLabelFixed={true}
				fullWidth={true}
				value={this.getProp("first")}
			/>
			<TextField
				floatingLabelText="Email"
				floatingLabelFixed={true}
				fullWidth={true}
				value={this.getProp("email")}
			/>										
						
			<TextField
				floatingLabelText="Password"
				floatingLabelFixed={true}
				fullWidth={true}				
				type="password"
			/>											
		</Paper>
	}
}

export default View;