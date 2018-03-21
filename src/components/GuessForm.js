import React, { Component } from "react";
import '../styles/GuessForm.css';

class GuessForm extends Component {
  onSubmit(event) {
    event.preventDefault();
    
    if(this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          ref={input => (this.input = input)}
          required
        />
        
        <button type="submit" name="submit" id="guessButton" className="button" onClick={()=>console.log('hello')}>
          Guess
        </button>
      </form>
    );
  }
}
export default GuessForm;
