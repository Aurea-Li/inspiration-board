import React from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const {text } =  props.card;

  return(
    <div className="card">
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
