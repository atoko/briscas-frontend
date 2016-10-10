import React, {Component} from 'react';
import List from './list';
import Detail from './detail';

const listData = [{name:"1993", id:"1993"}, {name:"Sevilla", id:"1994"}];
const detailData = {
	"": null,
	"1993": {name:"1993", id:"1993"},
	"1994": {name:"Sevilla", id:"1994"}
};

class Catalog extends Component {
	constructor() {
		super();
		this.state = {
			selected: ""
		};
	}
	select = (selected) => {
		this.setState({
			selected
		});
	}
	render() {
		if (this.props.data) {
			return <div>
				<div><List onSelect={this.select} member={this.props.data} data={listData}/></div>
				<div><Detail data={detailData[this.state.selected]} member={this.props.data}/></div>
			</div>;
		} else
		{
			return <span>"loading"</span>;
		}
	}
}
export default Catalog;