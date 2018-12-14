import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessages: []
    };
  }

  componentDidMount() {

    const GET_ALL_CARDS_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    });
  }

  addCard = (cardData) => {

    const ADD_CARD_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.post(ADD_CARD_URL, cardData)
    .then((response) => {
      const updatedCardList = [ ...this.state.cards, response.data]
      this.setState({ cards: updatedCardList })
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    });
  }

  deleteCard = (id) => {
    const DELETE_CARD_URL = `https://inspiration-board.herokuapp.com/cards/${id}`;

    axios.delete(DELETE_CARD_URL)
    .then(() => {
      const updatedCardList = [...this.state.cards];
      const index = updatedCardList.findIndex(card => card.id === id);
      updatedCardList.splice(index, 1);
      this.setState({ cards: updatedCardList });
    })
    .catch((error) => {
      this.setState({ errorMessages: [...this.state.errorMessages, error.message] });
    });
  }

  render() {

    const cardList = this.state.cards.map((card, i) => {

      const { id, text, emoji } = card.card;

      const formattedCard = {
        id: id,
        text: text,
        emoji: emoji
      };

      return <Card key={i}
        card={formattedCard}
        deleteCard={() => this.deleteCard(id)} />
    });

    console.log('error messages',this.state.errorMessages);
    const errorMessages = this.state.errorMessages.map((message, i) => {
      return <li key={i}>{message}</li>;
      });

    return (
      <div>
        <section className="errors">
          <ul>
            {errorMessages}
          </ul>
        </section>
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
