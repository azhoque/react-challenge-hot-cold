import { SET_MAKEGUESS, SET_RESTARTGAME, SET_SHOWINFO } from "./actions";

const initialState = {
  guesses: [],
  feedback: "Make Your Guess!",
  correctAnswer: Math.round(Math.random() * 100) + 1,
  showInfo: false
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === SET_MAKEGUESS) {
    let guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      feedback: "Please enter a valid number.";
    }

    const delta = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    switch (true) {
      case delta >= 50:
        feedback = "You're ice cold...";
        break;
      case delta >= 30:
        feedback = "You're still cold...";
        break;
      case delta >= 10:
        feedback = "You're warm...";
        break;
      case delta >= 1:
        feedback = "You're hot!";
        break;
      case delta === 0:
        feedback = "You got it!";
        break;
    }

    return Object.assign({}, state, {
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    if (action.type === SET_RESTARTGAME) {
      return Object.assign({}, state, {
        guesses: [],
        feedback: "Make your Guess!",
        correctAnswer: Math.round(Math.random() * 100) + 1
      });
    }

    if (action.type === SET_SHOWINFO) {
        
        return Object.assign({}, state, {
            showInfo: value
        });
      }
    return state;
  }
};
