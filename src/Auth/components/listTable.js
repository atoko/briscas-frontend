import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router'

class CompetitionsTable extends Component {
	rows() {
		return this.props.data.map((competition) => {
			return <TableRow key={competition}>
				<TableRowColumn>
					<Link to={`/${competition}/detail`}>{competition}</Link>
				</TableRowColumn>
			</TableRow>;
		});
	}
	render() {
		return <Table
				selectable={false}
			>
			<TableHeader
				displaySelectAll={false}
				adjustForCheckbox={false}
			>
				<TableRow>
					<TableHeaderColumn>Choose a competition</TableHeaderColumn>
				</TableRow>
			</TableHeader>				
			<TableBody 
				displayRowCheckbox={false}
			>
				{this.rows()}
			</TableBody>
		</Table>		
	}
}

export default CompetitionsTable;