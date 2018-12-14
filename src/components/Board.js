import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        "It don't be like it is, but it do."
      ],
    };
  }

  render() {

    const cards = this.state.cards.map((card, i) => {
      return <Card key={i} card={card} />
    })

    return (
      <div>
        {cards}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardname: PropTypes.string.isRequired
};

export default Board;
