# Tests to run

1. Smoke tests – do all components mount?
   - do for all components :white_check_mark:

2. State tests - does app state change appropriately
   a. (in lower components) on submit, or other action, does state "setter" method fire from lower down in the DOM?
     - GuessForm: submit form works, ie fires the correct setter :white_check_mark:	
     - NavBar: when you click New Game, it runs the appropriate method
     - NavBar: when you click What? it runs setShowInfo with appropriate value
     - Info: when you click on it, it runs setShowInfo with appropriate value
   b. (in App.js) does setter method actually change the state?
     - when you append to state.guesses, :white_check_mark:, GuessList get another Guess, and GuessCount increments up
     - changing setShowInfo causes Info to render or not render