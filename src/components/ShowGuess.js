import React from 'react';
import GuessCount from './GuessCount';
import GuessList from './GuessList';


export default function ShowGuess(props) {
  const { guesses } = props;
  const guessCount = guesses ? guesses.length : 0;

  return (
    <div>
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
    </div>
  );
}