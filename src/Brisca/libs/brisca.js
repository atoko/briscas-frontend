/* eslint-disable */
import {
	range,
	shuffle
} from "./deckUtil";
class BriscaEngine {
	constructor(deck) {
		this.life = this.determineSuit(deck[0]);
		this.pointMapping = {
			0: 11,
			2: 10,
			7: 1,
			8: 2,
			9: 3
		};
	}
	getWinner(cardArray, lastWinner, playerCount) {
		var lead = cardArray[0];
		var winner = lead;
		for (var card in cardArray) {
			winner = this.determineWinner(winner, cardArray[card]);
		}
		return (cardArray.indexOf(winner) + lastWinner) % playerCount;
	}
	totalPoints(cardArray) {
		var points = 0;
		for (var card in cardArray) {
			points += this.determinePointValue(cardArray[card]);
		}
		return points;
	}
	determineWinner(cardA, cardB) {
		var winner = cardA;
		if (
			(!this.determineLife(cardA) && this.determineLife(cardB)) ||
			(this.determineSuit(cardB) === this.determineSuit(cardA))
		) {
			//If cardB is Life but cardA isn't winner = cardB;
			//If both points = 0, then highest face wins;
			if (this.determinePointValue(cardB) > this.determinePointValue(cardA)) {
				winner = cardB;
			}

			if (this.determinePointValue(cardA) == this.determinePointValue(cardB)) {
				if (this.determineFace(cardA) > this.determineFace(cardB)) {
					winner = cardA;
				} else {
					winner = cardB;
				}
			}
		}
		return winner;
	}
	determineLife(card) {
		return this.determineSuit(card) === this["life"];
	}
	determineSuit(card) {
		return Math.floor(card / 10);
	}
	determinePointValue(card) {
		return this.pointMapping[this.determineFace(card)] || 0;
	}
	determineFace(card) {
		return card - (this.determineSuit(card) * 10);
	}

}

class BriscaGame {
	constructor(deck, sequence, tableSize, players) {
		this.deck = deck;
		this.playDeck = deck.slice();
		this.playSequence = sequence;
		this.tableSize = tableSize;
		this.players = [];
		this.dropCards = [];
		this.lastPlay = [];
		this.lastWinner = 0;
		this.nextToDraw = 0;
		this.nextToPlay = 0;
		this.engine = new BriscaEngine(deck);

		for (var index = 0; index < players.length; index++) {
			this.join(players[index].player_id);
		}
		return this;
	}
	ai() {
		if (this["players"][this["nextToPlay"]]["player_id"] === "bot") {
			this.play(this["players"][this["nextToPlay"]]["hand"][0]);
		}
	}
	nextPlayerId() {
		return this["players"][this.nextToPlay]["player_id"];
	}
	join(player_id) {
		let playerAlreadyJoined = false;
		if (playerAlreadyJoined || this.players.length == this.tableSize) {
			return this;
		}

		if (player_id === undefined || player_id === null) {
			player_id = "bot";
		}
		this["players"].push({
			hand: [],
			grave: [],
			points: 0,
			player_id
		});

		if (this.players.length === this.tableSize) {
			for (var cards = 0; cards < 3; cards++) {
				this.deal();
			}

			let sequence = this.playSequence.slice();
			this.playSequence = [];
			for (var play = 0, length = sequence.length; play < length; play++) {
				this.play(sequence[play], true);
			}

			this.ai();
		}

		return this;
	}
	deal() {
		let playerCount = this["players"].length;

		if (this["playDeck"].length < playerCount)
			return;

		for (var p = 0; p < playerCount; p++) {
			let nextId = this["nextToDraw"];
			let card = this["playDeck"].pop();

			this["players"][nextId]["hand"].push(card);
			this["nextToDraw"] = (this["nextToDraw"] + 1) % playerCount;
		}

		this.ai();
	}
	play(card_id, historic = false) {
		let playerHand = this["players"][this["nextToPlay"]]["hand"],
			index = playerHand.indexOf(parseInt(card_id));

		if (index != -1) {
			card_id = playerHand[index];

			this["players"][this["nextToPlay"]]["hand"].splice(index, 1);
			this["dropCards"].push(card_id);
			this["playSequence"].push(card_id);

			this.turn(historic);
		}

		return this;
	}
	turn(historic = false) {
		let players = this["players"].length;

		this["nextToPlay"] = (this["nextToPlay"] + 1) % players;

		if (this["dropCards"].length >= players) {
			let winner = this.engine.getWinner(this.dropCards, this["lastWinner"], this.players.length);

			this["lastWinner"] = winner;
			for (var card in this["dropCards"]) {
				this["players"][winner]["grave"].push(this["dropCards"][card]);
				this["players"][winner]["points"] = this.engine.totalPoints(this["players"][winner]["grave"]);
			}

			this["lastPlay"] = this["dropCards"].splice(0);
			this["dropCards"] = [];

			this["nextToDraw"] = winner;
			this["nextToPlay"] = winner;
			this.deal();
		} else if (!historic && this["players"][this["nextToPlay"]]["player_id"] === "bot") {
			this.play(this["players"][this["nextToPlay"]]["hand"][0]);
		}
	}

	serialize() {
		let players = this.players.map((p) => {
			return p.player_id;
		});
		return {
			deck: this.deck,
			players: players,
			tableSize: this.tableSize,
			playSequence: this.playSequence
		};
	}

	static deserialize(blob) {
		blob.players = blob.players.map((p) => {
			return {
				player_id: p
			};
		});
		return new BriscaGame(blob.deck, blob.playSequence, blob.tableSize, blob.players);
	}
	static tableFor(n) {
		let deck = shuffle(range(40));
		return new BriscaGame(deck, [], n, []);
	}
}

export default BriscaGame;