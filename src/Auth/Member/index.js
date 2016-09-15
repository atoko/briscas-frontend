import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import View from './components/view';
import Get from './containers/get';
import './index.css';

class Member extends Component {
	render() {
		return (
		<Paper
			zDepth={1}
		>
			<div className="paper">
				<div className="grid">
					<div className="grid-item">
						<Get url={'auth'}><View /></Get>
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