import React from 'react';
import GuessCount from './GuessCount';
import GuessList from './GuessList';

export default function ShowGuess(props) {
  const { guesses } = props;
  const guessCount = guesses.length;

  return (
    <div>
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
    </div>
  );
}