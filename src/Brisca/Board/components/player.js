import React, {Component} from 'react';
import Hand from './hand';

class Player extends Component {
    render() {		
		const player = this.props.player;

        return <div>
			<span>{player.points}</span>
			<Hand cards={player.hand} stack={false}/>
		</div>;
    }
}

export default Player