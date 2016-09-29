import React, {Component} from 'react';

class Card extends Component {
    render() {
        return <li><a src="/go" onClick={this.props.onSubmit}>{this.props.id}</a></li>
    }
}

export default Card