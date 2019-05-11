import React, { useState, useEffect } from 'react';

import classes from './Game.module.css';
import Background from './Background/Background';
import Gallows from './Background/Gallows/Gallows'
import Letter from './Letter/Letter';
import Keypad from './Keypad/Keypad';

const Game = () => {

	let word = 'Hangman';
	let splitWord = word.split('');
	let objectArray = [];
	splitWord.map((word, i) => {
		let objectItem = {letter: word, hasBeenSelected: false};
		objectArray[i] = objectItem;
		return objectArray;
	});

	const [wordState, setWordState] = useState(objectArray);
	const [letterGuess, setLetterGuess] = useState(null);

	let guessCheck = () => {
		wordState.map((letter, i) => {
			if(letterGuess === letter.letter.toUpperCase() && !letter.hasBeenSelected) {
				console.log('update');
				let updatedWordState = [...wordState];
				updatedWordState[i].hasBeenSelected = true;
				setWordState(updatedWordState);
			}

			return [...wordState];
		})
	}
	
	useEffect(() => {
		guessCheck();
	}); 

	let renderedWord = wordState.map((letter, i) => {
		return <Letter key={i} letter={letter.hasBeenSelected ? letter.letter : '__'} />
	});

	let handleLetterSelect = (e) => {
		setLetterGuess(e.target.innerHTML.toUpperCase());
	}
	 

	return (
		<div className={classes.MainDiv}>
			<Background />
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
