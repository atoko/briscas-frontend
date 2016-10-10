import React, {Component} from 'react';
import Post from '../containers/post';

class Button extends Component {
	onSubmit = () => {
		this.props.onSubmit(this.props.body);
	}
	render() {
		return <button onClick={this.onSubmit}>amirite</button>
	}
}
class PostButton extends Component {
	render() {
		return React.createElement(Post, this.props, <Button body={this.props.body}/>);
	}
}
export default PostButton;