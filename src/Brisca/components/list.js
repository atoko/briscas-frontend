import React, { Component } from 'react';

class List extends Component {
	renderEmptyItem() {
		return <li>no game</li>
	}
	renderListItems(games) {
		const listItems = games.map( (game) => {
			return <li key={game.id}></li>
		})
		return <li>game</li>
	}
	render() {
		let games = this.props.data,
			items = this.renderEmptyItem();
		if (games) {
			items = this.renderListItems(games);
		}
		return <div><ul>{items}</ul></div>;
	}
}

export default List;