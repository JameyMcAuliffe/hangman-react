import React, { useState, useEffect } from 'react';

import classes from './Game.module.css';
import Background from './Background/Background';
import Gallows from './Background/Gallows/Gallows'
import Letter from './Letter/Letter';
import Keypad from './Keypad/Keypad';
import Figure from './Figure/Figure';
import EndingMessage from './EndingMessage/EndingMessage';
import { getWord } from '../API/API';

const Game = () => {



	const [splitWord, setSplitWord] = useState(null);
	const [wordState, setWordState] = useState(null);
	const [letterGuess, setLetterGuess] = useState(null);
	const [guessMade, setGuessMade] = useState(false);
	const [correctGuess, setCorrectGuess] = useState(null);
	const [missCount, setMissCount] = useState(0);
	const [endGame, setEndGame] = useState(false);
	const [outcome, setOutcome] = useState(null);

	let missesArray = [1, 2, 3, 4, 5, 6];
	let objectArray = [];
	let renderedWord;

	useEffect(() => {
		getWord()
			.then(data => {
				return data.data.word.toUpperCase().split('');
			})
			.then (wordArray => {
				setSplitWord(wordArray);
			  //Setup initial structure for wordState
				wordArray.map((letter) => {
					let hasBeenSelected = false;
					if (letter === '-') {
						hasBeenSelected = true;
					}
					let objectItem = {letter, hasBeenSelected};
					objectArray.push(objectItem);
					return objectArray;
				});
					setWordState(objectArray);
			});
			// eslint-disable-next-line
	}, []);

	let guessCheck = () => {
		if(wordState !== null) {
			wordState.map((letter, i) => {
				if(letterGuess === letter.letter.toUpperCase() && !letter.hasBeenSelected) {
					let updatedWordState = [...wordState];
					updatedWordState[i].hasBeenSelected = true;
					setWordState(updatedWordState);
					setCorrectGuess(true);
					setTimeout(() => {
						setCorrectGuess(null);
					}, 1000);
				}
			
				return wordState;
			});			
		}
	}

	let missCheck = () => {
		if(splitWord !== null) {
			let upperCaseArray = splitWord.map((letter) => {
				return letter.toUpperCase();
			});

			if (upperCaseArray.indexOf(letterGuess) === -1 && guessMade) {
				let newCount = missCount + 1;
				setMissCount(newCount);
				setGuessMade(false);
			}
		}
	}

	let winCheck = () => {
		if(wordState !== null) {
			let correctGuessCount = 0;
			wordState.map(letter => {
				if(letter.hasBeenSelected === true) {
					correctGuessCount++;
					if(correctGuessCount === wordState.length) {
						setOutcome('w');
						setEndGame(true);
					}
				}
				return letter;
			});
		}
	}

	let lossCheck = () => {
		if(missCount === missesArray.length) {
			setOutcome('l');
			setEndGame(true);
		}
	}
	
	useEffect(() => {
		guessCheck();
		missCheck();
		lossCheck();
		winCheck();
	}); 

	let handleLetterSelect = (e) => {
		setLetterGuess(e.target.innerHTML.toUpperCase());
		setGuessMade(true);
	}

	if (wordState !== null) {
		renderedWord = wordState.map((letter, i) => {
			return <Letter key={i} correctGuess={correctGuess && letterGuess === letter.letter.toUpperCase() ? true : null} letter={letter.hasBeenSelected ? letter.letter : '__'} />
		});
	}	

	let renderedFigures = missesArray.map((i) => {
		return <Figure key={i} number={i} missCount={missCount} endGame={endGame}/>
	})
	 

	return (
		<div className={endGame ? classes.LosingCondition : null}>
			<div className={classes.MainDiv}>
				<Background />
				<div className={classes.FigureDiv}>
					{renderedFigures}
				</div>
				<Gallows />
				{endGame ? <div className={classes.EndingMessageDiv}>
					<EndingMessage outcome={outcome} word={splitWord.join('')}/>
				</div> : null}
				<div className={classes.LetterDiv}>
					{wordState !== null ? renderedWord : null}
				</div>
				<div className={classes.KeypadDiv}>
					<Keypad endGame={endGame} letterClick={handleLetterSelect} selectedTarget={letterGuess}/>
				</div>
			</div>
		</div>
	);
}


export default Game;
