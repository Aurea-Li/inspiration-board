import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    const baseState = {
      text: '',
      emoji: '',
      errorMessages: []
    };

    this.state = {...baseState};
    this.baseState = {...baseState};
  }

  onInputChange = (e) => {
    const { name, value } = e.target;

    const newState = {};
    newState[name] = value;
    this.setState(newState);

  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === '') {
      this.setState({ errorMessages: [...this.state.errorMessages, "text cannot be blank"]});
      return;
    }

    const newCard = {...this.state};

    this.setState(this.baseState);

    this.props.addCard(newCard);

    this.setState({
      errorMessages: []
    });

  }


  render () {

    const emojiList = EMOJI_LIST.map((emojiText, i) => {

      const emojiCode = emoji.getUnicode(emojiText);

      return (<option value = {emojiCode} key = {i}>{emojiCode}</option>)
    });

    const errorMessages = this.state.errorMessages.map((message, i) => {
      return <li key={i}>{message}</li>;
      });

    return(
      <div>
        <section className="errors">
          <ul>
            {errorMessages}
          </ul>
        </section>

        <form
          className="new-card-form"
          onSubmit={this.onFormSubmit}
          >
          <div>
            <label htmlFor="text">Text:</label>
            <textarea
              name="text"
              value={this.state.text}
              onChange={this.onInputChange}
              className="new-card-form__form-textarea"
              />
          </div>
          <div>
            <label htmlFor="emoji">Emoji:</label>
            <select name="emoji" value={this.state.emoji} onChange={this.onInputChange}>
              {emojiList}
            </select>
          </div>
          <input
            type="submit"
            value="Add Card"
            className="new-card-form__form-button"
            />
        </form>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  addCard: PropTypes.func,
};

export default NewCardForm;
