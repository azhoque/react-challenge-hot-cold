import React, { Component } from "react";
import Header from "../components/Header";
//import GuessForm from "../components/GuessForm";
//import GuessCount from "../components/GuessCount";
import ShowGuess from "../components/ShowGuess";
import GuessSection from "../components/GuessSection";
import Info from "../components/Info";
import {connect} from "react-redux";
//import NavBar from "../components/NavBar"

//class App extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     guesses: [],
//     feedback: "Make Your Guess!",
//     correctAnswer: Math.round(Math.random() * 100) + 1,
//     showInfo: false
//   };

//   this.makeGuess = this.makeGuess.bind(this)
//   this.setShowInfo = this.setShowInfo.bind(this)
//   this.restartGame = this.restartGame.bind(this)
// }

// setShowInfo(value) {
//   this.setState({
//     showInfo: value
//   })
// }

// restartGame() {
//   this.setState({
//     guesses: [],
//     feedback: "Make your Guess!",
//     correctAnswer: Math.round(Math.random() * 100) + 1
//   });
// }

// makeGuess(guess) {
//   guess = parseInt(guess, 10)
//   if (isNaN(guess)) {
//     this.setState({ feedback: "Please enter a valid number." })
//     return;
//   }

//   const delta = Math.abs(guess - this.state.correctAnswer)

//   let feedback;
//   switch (true) {
//     case (delta >= 50):
//       feedback = "You're ice cold..."
//       break
//     case (delta >= 30):
//       feedback = "You're still cold..."
//       break
//     case (delta >= 10):
//       feedback = "You're warm..."
//       break
//     case (delta >= 1):
//       feedback = "You're hot!"
//       break
//     case (delta === 0):
//       feedback = "You got it!"
//       break
//   }

//   this.setState({
//     feedback,
//     guesses: [...this.state.guesses, guess]
//   });

//   document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
// }

//  render() {
//     const renderInfo = this.state.showInfo
//       ? <Info showInfoToggle={this.setShowInfo}/>
//       : undefined

//     const { feedback, guesses } = this.state;
//     const guessCount = guesses.length;
//     return (
//       <div className="game">

//         <Header
//           showInfoToggle={this.setShowInfo}
//           restartGame={this.restartGame}
//         />
//         <main role="main">
//             <GuessSection
//               feedback={feedback}
//               guessCount={guessCount}
//               onMakeGuess={this.makeGuess}
//             />
//             <ShowGuess guesses={guesses} />
//             {renderInfo}

//           </main>
//       </div>
//     );
//   }
// }

// export default App;

const App = props => {
  const renderInfo = props.showInfo
      ? <Info />
      : undefined

  return (
    <div className="game">
      <Header />
      <main role="main">
        <GuessSection />
        <ShowGuess />
        {renderInfo}
      </main>
  </div>
  )
}

export const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    feedback: state.feedback,
    showInfo: state.showInfo,
    guessCount: state.guesses.length
  }
}

export default connect(mapStateToProps)(App);
