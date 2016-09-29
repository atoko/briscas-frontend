import React, {Component} from 'react';
import Game from './game';
import Player from './player';
import BriscaGame from '../../libs/brisca';
class Board extends Component {
	renderPlayers() {
		let players = this.playerData.map( (p, i) => { 
			return <Player key={i} player={p} /> 
		});
		return players;
	}
	render() {
		if (this.game) {
			return <div>
				{JSON.stringify(this.game)}
				<Game game={this.game}/>
				{this.renderPlayers()}
			</div>;
		} else
		{
			return <span>"loading"</span>;
		}
	}
	componentWillUpdate(newProps) {
		if (newProps && newProps.data) {
			this.game = BriscaGame.deserialize(newProps.data.data);
			this.playerData = this.game.players.map( (p, i) => {
				return { ...p, ...newProps.data.player_data[i]};
			});
		}
	}
}

export default Board;