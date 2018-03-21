import React from 'react'
import '../styles/GuessCount.css';
const GuessCount = (props) => {
    return (
      <div>
        <h2 id="guess-cnt">Guess #<span id="count">{props.guessCount}</span>!</h2>
      </div>
    )
}
export default GuessCount;