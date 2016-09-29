import React, {Component} from 'react';

class Card extends Component {
	onSubmit(event) {
		this.props.onSubmit();
	}
    render() {
        return <li><a src="/go" onClick={this.onSubmit}>{this.props.id}</a></li>
    }
}

export default Card