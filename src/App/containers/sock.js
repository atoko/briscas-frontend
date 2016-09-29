import React, { Component } from 'react';
class Sock extends Component {
	constructor() {
		super();
		this.state = {data: null};
	}
	render() {
		return React.cloneElement(this.props.children, {
				data: this.state.data
		});
	}

	componentDidMount() {
		let socketUrl = '/brisca';
		if (process.env.node_env !== 'production') {
			socketUrl = 'http://localhost:5000' + socketUrl;
		};
		const socket = io(socketUrl);
		socket.on('update', (data) => {
			if (data) {
				this.setState({
					...this.state,
					data
				})
			};
		});
		socket.emit('subscribe', this.props.subscribe());
		this.socket = socket;
	}	
}

export default Sock;