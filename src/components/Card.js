import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {

  const {text, emoji } =  props.card;

  return(
    <div className="card">
      {emoji}
      {text}
      <button
        onClick={props.deleteCard}>
        Delete
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
