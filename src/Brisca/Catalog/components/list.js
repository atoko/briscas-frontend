import React, {Component} from 'react';
class List extends Component {
	handleOnClick = (e) => {
		if (this.props.onSelect) {
			this.props.onSelect(e.target.id);
		}
	}
	renderList() {
		let list = this.props.data.map( (asset) => {
			return <li id={asset.id} onClick={this.handleOnClick} key={asset.id}>
				{asset.name}
			</li>
		})
		return list;
	}
	render() {
		if (this.props.data) {
			return <div>
				<ul>{this.renderList()}</ul>
			</div>;
		} else
		{
			return <span>"loading"</span>;
		}
	}
}
export default List;