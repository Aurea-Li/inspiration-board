import React from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({ text, id, deleteCard }) => {


  return(
    <div className="card">
      {text}
      <button
        onClick={deleteCard}>
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
