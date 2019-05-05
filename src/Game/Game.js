import React, { useState, useEffect } from 'react';

import classes from './Game.module.css';
import Background from './Background/Background';
import Gallows from './Background/Gallows/Gallows'
import Letter from './Letter/Letter';

const Game = () => {
	const [word, setWord] = useState('Hangman');
	const [wordArray] = useState(word.split(''));

	useEffect(() => {
		console.log('wordArray: ', wordArray);
		// let splitWord = word.split('');
	}); 


	return (
		<div className={classes.Div}>
			<Background />
			<Gallows />
			<Letter />
		</div>
	);
}


export default Game;
