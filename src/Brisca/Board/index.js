import React, {Component} from 'react';
import Sock from '../../App/containers/sock';
import Board from './components/board';
import { connect } from 'react-redux';
class GameBoard extends Component {
	gameId = () => {
		return this.props.params ? this.props.params.gameId : this.props.Id;
	}
	gameSubscription = () => {
		return {
			playerId: this.props.session.player_id,
			briscaId: this.gameId()
		};	
	}
	render() {
		return <Sock subscribe={this.gameSubscription}><Board /></Sock>;
	}
}
let mapStateToProps = (state) => {
	return { session: state.session };
};
export default connect(mapStateToProps, null)(GameBoard);