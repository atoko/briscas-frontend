import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';

class GuestForm extends Component {
	constructor() {
		super();
	}
	onSubmit = () => {
		if (this.props.onSubmit) {
			this.props.onSubmit({});
		}
	}
	onDismiss = () => {
		if (this.props.onDismiss) {
			this.props.onDismiss();
		}
	}
	render() {
		return <div className="form">
			
				<RaisedButton onClick={this.onSubmit} label="Log in as Guest" fullWidth={true}  secondary={true} />	
				<small> or </small>	
				<RaisedButton onClick={this.onDismiss} label="Log in" fullWidth={true}  primary={true} />		

		</div>
	}
}

export default GuestForm;