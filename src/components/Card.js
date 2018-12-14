import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.card}
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.string.isRequired,
};

export default Card;
