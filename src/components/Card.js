import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {

  const {text, emoji } =  props.card;

  return(
    <div className="card card__content">

      <div className="card__content-emoji">{emoji} </div>
      <div className="card__content-text">{text}</div>
      <button
        className="card__delete"
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
