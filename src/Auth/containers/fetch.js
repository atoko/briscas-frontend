import React, { Component } from 'react';
class Fetch extends Component {
	constructor() {
		super();
		this.state = {data: []};
	}	
	render() {
		return <div>
			{React.cloneElement(this.props.children, {
				data: this.state.data
			})}
		</div>
	}

	componentDidMount() {
		fetch(`http://localhost:51966/${this.props.url}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			this.setState({
				...this.state,
				data
			})
		});
	}	
}

export default Fetch;