import React from 'react'
import '../styles/GuessCount.css';
import {connect} from "react-redux";

const GuessCount = props => {
    return (
      <div>
        <h2 id="guess-cnt">Guess #<span id="count">{props.guessCount}</span>!</h2>
      </div>
    )
}
export const mapStateToProps = state => ({
  guessCount: state.guesses.length
});

export default connect (mapStateToProps)(GuessCount);