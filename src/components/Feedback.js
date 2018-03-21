import React from 'react';
import '../styles/Feedback.css';

export default function Feedback(props) {

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
