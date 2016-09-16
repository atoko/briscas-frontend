import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
class GuestForm extends Component {
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
		const subheaderStyle = {
			paddingLeft: '0px'
		};

		return <div className="form">
			<div className="login">

				<p>%BriscasAU requires a user account.%</p>
				<RaisedButton 
					onClick={this.onSubmit} 
					label="%Continue as Guest%"
					style={{
						height: 80
					}}					
					fullWidth={true}  
					secondary={true} 
				/>	
				<Subheader style={subheaderStyle}> %or% </Subheader>	
				<RaisedButton onClick={this.onDismiss} label="%Log in%" fullWidth={true}  primary={true} />		
				
				<div>
					<Subheader style={subheaderStyle}> %Don't have an account?% </Subheader>	
					<RaisedButton onClick={this.onDismiss} label="%Sign up%" fullWidth={true}/>				
				</div>
			</div>
		</div>
	}
}

export default GuestForm;