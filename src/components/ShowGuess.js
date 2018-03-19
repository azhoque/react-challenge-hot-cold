import React from 'react';
import GuessCount from './GuessCount';

export default function ShowGuess(props) {
  const { guesses } = props;
  const guessCount = guesses.length;

  return (
    <section>
      <GuessCount guessCount={guessCount} />
    </section>
  );
}