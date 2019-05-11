import React from 'react';

import classes from './Letter.module.css';

const Letter = (props) => {
	return (
		<h1 className={props.correctGuess ? classes.CorrectGuess : classes.Letter}>{props.letter}</h1>
	);
};

export default Letter;
