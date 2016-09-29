import React, {Component} from 'react';
import Post from '../../../App/containers/post';
import Card from './card';

class Hand extends Component {
    render() {
        var cards = [];
        if (this.props.cards.length > 0)
        {
            cards = this.props.cards.map(function(card, i) {
                return <Post key={card} url={`game/2/${card}`}><Card id={card}/></Post>
            });
        }
        else
        {
            cards = <div/>;
        }
        return <ul>{cards}</ul>;
    }
}

export default Hand