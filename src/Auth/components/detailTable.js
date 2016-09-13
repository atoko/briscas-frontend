import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router'

class CompetitionsTable extends Component {
	rows() {
		return this.props.data.map((competition) => {
			return <TableRow key={competition.TeamName}>
				<TableRowColumn>
					{competition.Rank}
				</TableRowColumn>
				<TableRowColumn>
					{competition.TeamName}
				</TableRowColumn>
				<TableRowColumn>
					{competition.NumSubmissions}
				</TableRowColumn>											
				<TableRowColumn>
					{competition.Score}
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
					<TableHeaderColumn>Rank</TableHeaderColumn>
					<TableHeaderColumn>Team Name</TableHeaderColumn>
					<TableHeaderColumn># of Submissions</TableHeaderColumn>
					<TableHeaderColumn>Score</TableHeaderColumn>
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