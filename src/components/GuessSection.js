import React from 'react';
import Feedback from './Feedback';
import GuessForm from './GuessForm';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <div>
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </div>
  );
}
