import React, { useState, useEffect } from 'react';

import classes from './Game.module.css';
import Background from './Background/Background';
import Gallows from './Background/Gallows/Gallows'
import Letter from './Letter/Letter';
import Keypad from './Keypad/Keypad';
import Figure from './Figure/Figure';

const Game = () => {

	let word = 'Hangman';
	let splitWord = word.split('');
	let objectArray = [];

	//Setup initial structure for wordState
	splitWord.map((word) => {
		let objectItem = {letter: word, hasBeenSelected: false};
		objectArray.push(objectItem);
		return objectArray;
	});


	const [wordState, setWordState] = useState(objectArray);
	const [letterGuess, setLetterGuess] = useState(null);
	const [guessMade, setGuessMade] = useState(false);
	const [correctGuess, setCorrectGuess] = useState(null);
	const [missCount, setMissCount] = useState(0);

	let guessCheck = () => {
		wordState.map((letter, i) => {
			if(letterGuess === letter.letter.toUpperCase() && !letter.hasBeenSelected) {
				let updatedWordState = [...wordState];
				updatedWordState[i].hasBeenSelected = true;
				setWordState(updatedWordState);
				setCorrectGuess(true);
				setTimeout(() => {
					setCorrectGuess(null);
				}, 1000)
			}
		
			return wordState;
		});
	}

	let missCheck = () => {
	
		let upperCaseArray = splitWord.map((letter) => {
			return letter.toUpperCase();
		});

		if (upperCaseArray.indexOf(letterGuess) === -1 && guessMade) {
			let newCount = missCount + 1;
			setMissCount(newCount);
			setGuessMade(false);
		}
	}
	
	useEffect(() => {
		guessCheck();
		missCheck();
	}); 

	let renderedWord = wordState.map((letter, i) => {
		return <Letter key={i} correctGuess={correctGuess && letterGuess === letter.letter.toUpperCase() ? true : null} letter={letter.hasBeenSelected ? letter.letter : '__'} />
	});

	let handleLetterSelect = (e) => {
		setLetterGuess(e.target.innerHTML.toUpperCase());
		setGuessMade(true);
	}

	let missesArray = [1, 2, 3, 4, 5, 6];

	let renderedFigures = missesArray.map((i) => {
		return <Figure key={i} number={i} missCount={missCount}/>
	})
	 

	return (
		<div className={classes.MainDiv}>
			<Background />
			<div className={classes.FigureDiv}>
				{renderedFigures}
			</div>
			<Gallows />
			<div className={classes.LetterDiv}>
				{renderedWord}
			</div>
			<div className={classes.KeypadDiv}>
				<Keypad letterClick={handleLetterSelect} selectedTarget={letterGuess}/>
			</div>
		</div>
	);
}


export default Game;
