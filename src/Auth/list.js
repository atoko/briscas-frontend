import React, { Component } from 'react';
import Fetch from "./containers/fetch";
import Table from "./components/listTable";
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class Competitions extends Component {
	table() {
		return <Fetch url="list"><Table/></Fetch>
	}
	render() {
		return (
			<div>
				<Toolbar>
					<ToolbarGroup firstChild={true}>
					
					</ToolbarGroup>
					<ToolbarGroup>
						<h2>Welcome to Kaggle Competitions</h2>
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