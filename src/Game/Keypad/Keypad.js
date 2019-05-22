import React, {useState, useEffect} from 'react';

import classes from './Keypad.module.css';
import Key from './Key/Key';

const Keypad = (props) => {

	let letterArray = [
		{letter: 'A', hasBeenSelected: false},
		{letter: 'B', hasBeenSelected: false},
		{letter: 'C', hasBeenSelected: false},
		{letter: 'D', hasBeenSelected: false},
		{letter: 'E', hasBeenSelected: false},
		{letter: 'F', hasBeenSelected: false},
		{letter: 'G', hasBeenSelected: false},
		{letter: 'H', hasBeenSelected: false},
		{letter: 'I', hasBeenSelected: false},
		{letter: 'J', hasBeenSelected: false},
		{letter: 'K', hasBeenSelected: false},
		{letter: 'L', hasBeenSelected: false},
		{letter: 'M', hasBeenSelected: false},
		{letter: 'N', hasBeenSelected: false},
		{letter: 'O', hasBeenSelected: false},
		{letter: 'P', hasBeenSelected: false},
		{letter: 'Q', hasBeenSelected: false},
		{letter: 'R', hasBeenSelected: false},
		{letter: 'S', hasBeenSelected: false},
		{letter: 'T', hasBeenSelected: false},
		{letter: 'U', hasBeenSelected: false},
		{letter: 'V', hasBeenSelected: false},
		{letter: 'W', hasBeenSelected: false},
		{letter: 'X', hasBeenSelected: false},
		{letter: 'Y', hasBeenSelected: false},
		{letter: 'Z', hasBeenSelected: false}
	];

	let selectedTarget = props.selectedTarget;

	const [letterState, setLetterState] = useState(letterArray); 	

	useEffect(() => {
		letterState.map((letter, i) => {
			if(letter.letter === selectedTarget && !letter.hasBeenSelected) {
				let updatedLetterState = [...letterState];
				updatedLetterState[i].hasBeenSelected = true;
				setLetterState(updatedLetterState);
			} 

			return [...letterState];
		});
	});

	useEffect(() => {
		if (props.endGame) {
			let updatedLetterState = letterState.map((letter) => {
				letter.hasBeenSelected = true;
				return letter;
			});
			setLetterState(updatedLetterState);
		}
	}, [props.endGame, letterState]);

	let renderedLetters = letterState.map((letter, i) => {
		return <Key 
						letter={letter.letter} 
						letterClick={props.letterClick}  
						key={i}
						selected={letter.hasBeenSelected}/>
	});

	return (
		<div className={classes.KeypadDiv}>
			{renderedLetters}
		</div>
	);
	
}

export default Keypad;

