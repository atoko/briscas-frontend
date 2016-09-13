import React, { Component } from 'react';
import Fetch from "./containers/fetch";
import Table from "./components/detailTable";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router'

class Competitions extends Component {
	constructor(props) {
		super();
		this.competition = props.params.competition;
	}
	table() {
		return <Fetch url={`detail/${this.competition}`}><Table/></Fetch>
	}
	goBack() {
		browserHistory.push('/');	
	}
	render() {
		return (
			<div>
				<Toolbar>
					<ToolbarGroup firstChild={true}>
						<RaisedButton onClick={this.goBack} label="Back" primary={true} />
					</ToolbarGroup>
					<ToolbarGroup>
						<h2>{this.competition}</h2>					
					</ToolbarGroup>

					<ToolbarGroup>			
					</ToolbarGroup>							
				</Toolbar>
					{this.table()}				
			</div>
		);
	}
}

export default Competitions