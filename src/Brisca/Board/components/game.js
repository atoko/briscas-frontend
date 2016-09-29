import React, {Component} from 'react';
import Hand from './hand';

class Game extends Component {
    render() {		
		const game = this.props.game;
		let score1 = 0;
		let score2 = 0;
		if (game.tableSize === 2) {
			score1 = game.players[0].points;
			//score2 = game.players[1].points;
		}
		let dropCards = game.dropCards.length > 0 ? game.dropCards : game.lastPlay;
		let life = game.engine.life;
        return <div>
			<span>{`Life is ${life}`}</span>
			<Hand cards={dropCards} stack={true}/>
			<ul>
				<li>{score1}</li>
				<li>{score2}</li>
			</ul>
		</div>;
    }
}

export default Game