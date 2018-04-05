import React from 'react';
import '../styles/GuessList.css';
import {connect} from "react-redux";

const GuessList = props => {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul className="show">
      {guesses}
    </ul>
  );
}

export const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect (mapStateToProps)(GuessList);