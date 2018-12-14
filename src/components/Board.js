import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    const GET_ALL_CARDS_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(GET_ALL_CARDS_URL)

    .then((response) => {
      this.setState({
        cards: response.data
      });
    })

    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {

    const cardList = this.state.cards.map((card, i) => {

      const { id, text } = card.card;

      const formattedCard = {
        id: id,
        text: text
      };

      return <Card key={i} card={formattedCard} />
    })

    return (
      <div>
        {cardList}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
