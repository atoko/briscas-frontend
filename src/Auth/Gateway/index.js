import React, { Component } from 'react';
import Post from '';
import Login from '';

class Gateway extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div>
				<Post>
					<Login />
				</Post>
			</div>
		);
	}
}

export default Gateway