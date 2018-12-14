import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

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
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  addCard = (cardData) => {

    const ADD_CARD_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.post(ADD_CARD_URL, cardData)
    .then((response) => {

      console.log(response.data);
      const updatedCardList = [ ...this.state.cards, response.data]

      this.setState({ cards: updatedCardList })
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMessages: error });
    });

  }

  deleteCard = (id) => {
    const DELETE_CARD_URL = `https://inspiration-board.herokuapp.com/cards/${id}`;

    axios.delete(DELETE_CARD_URL)
    .then((response) => {
      const { newCards } = [...this.state];
      const index = newCards.findIndex(card => card.id === id);
      newCards.splice(index, 1);
      this.setState({ cards: newCards });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }



  render() {

    const cardList = this.state.cards.map((card, i) => {

      console.log(card);
      const { id, text } = card.card;

      const formattedCard = {
        id: id,
        text: text
      };

      return <Card key={i}
        card={formattedCard}
        deleteCard={() => this.deleteCard(id)} />
    })

    return (
      <div>
        {cardList}
        <NewCardForm addCard={this.addCard} />
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
