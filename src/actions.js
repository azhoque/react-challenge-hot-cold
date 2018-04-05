export const SET_MAKEGUESS = 'SET_MAKEGUESS';
export const makeGuess = guess => ({
    type: SET_MAKEGUESS,
    guess
});

export const SET_RESTARTGAME = 'SET_RESTARTGAME';
export const restartGame = correctAnswer => ({
    type: SET_RESTARTGAME,
    correctAnswer
});

export const SET_SHOWINFO = 'SET_SHOWINFO';
export const setShowInfo = value => ({
    type: SET_SHOWINFO,
    value
});