import React from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return(
    <div className="card">
      {props.card.text}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
