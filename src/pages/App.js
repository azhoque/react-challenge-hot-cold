import React, { Component } from "react";
import Header from "../components/Header";
import GuessForm from "../components/GuessForm";
import GuessCount from "../components/GuessCount";
import ShowGuess from "../components/ShowGuess";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: "Make Your Guess!",
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: "Make your Guess!",
      correctAnswer: Math.round(Math.random() * 100) + 1
    }); 
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10)
    if (isNaN(guess)) {
      this.setState({ feedback: "Please enter a valid number." })
      return;
    }

    const delta = Math.abs(guess - this.state.correctAnswer)

    let feedback; 
    if (delta >= 50) {
      feedback = "You're ice cold...";
    } else if (delta >= 30) {
      feedback = "You're still cold...";
    } else if (delta >= 10) {
      feedback = "You're warm...";
    } else if (delta >= 1) {
      feedback = "You're hot!"
    } else {
      feedback = "You got it!"
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;
    return (
      <div className="game">
      
        <Header 
          restartGame={() => this.restartGame()}
        />
        <h1>{feedback}</h1>
        <GuessForm />
        <GuessCount guessCount={guessCount}/>
       
        
       
      </div>
    );
  }
}

export default App;
