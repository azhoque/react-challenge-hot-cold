import React from 'react';
import Feedback from './Feedback';
import GuessForm from './GuessForm';
import {connect} from "react-redux";

const GuessSection = props => {
  const { feedback, guessCount } = props;
  return (
    <div>
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={props.onMakeGuess} />
    </div>
  );
}

export const mapStateToProps = state => ({
  feedback: state.feedback,
  guessCount: state.guesses.length
});

export default connect (mapStateToProps)(GuessSection);
