import React from 'react';
import '../styles/Feedback.css';
import {connect} from "react-redux";

const Feedback = props => {

  const key = props.guessCount;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span>Guess again!</span>;
  }
  return (
    <h2 
      key={key}
      id="feedback"
      role="status"
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}

export const mapStateToProps = state => ({
  guessCount: state.guesses.length,
  feedback: state.feedback
});

export default connect (mapStateToProps)(Feedback);
