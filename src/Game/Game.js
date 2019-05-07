import React, { useState, useEffect } from 'react';

import classes from './Game.module.css';
import Background from './Background/Background';
import Gallows from './Background/Gallows/Gallows'
import Letter from './Letter/Letter';
import Keypad from './Keypad/Keypad';

const Game = () => {
	const [word, setWord] = useState('Hangman');

	useEffect(() => {
		
	}); 

	let splitWord = word.split('').map((letter, i) => {
		return <Letter key={i} letter={letter} />
	});
	 

	return (
		<div className={classes.MainDiv}>
			<Background />
			<Gallows />
			<div className={classes.LetterDiv}>
				{splitWord}
			</div>
			<div className={classes.KeypadDiv}>
				<Keypad />
			</div>
		</div>
	);
}


export default Game;
