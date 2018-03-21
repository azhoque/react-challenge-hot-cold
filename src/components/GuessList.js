import React from 'react';
import '../styles/GuessList.css';
export default function GuessList(props) {
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
