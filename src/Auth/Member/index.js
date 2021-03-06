import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import View from './components/view';
import Get from '../../App/containers/get';
import './index.css';

class Member extends Component {
	render() {
		return (
		<Paper
			zDepth={1}
		>
				<h2 style={{
					marginTop: 0
				}}> %Hello, {}% </h2>
			<div className="paper">
				<div className="grid">
					<div className="grid-item">
						<Get on401="/gateway?logout&redirect=profile" url={'auth'}><View /></Get>
					</div>
					<div className="grid-item">
						<div className="medium">
							Authentication
						</div>
						<div className="large">

						</div>
					</div>
					<div className="grid-item">
						<div className="medium">
							Header that is very wordy
						</div>
					</div>								
				</div>		
			</div>
		</Paper>
);
	}
}

export default Member