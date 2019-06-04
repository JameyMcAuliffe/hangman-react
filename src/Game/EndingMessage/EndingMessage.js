import React from 'react';
import { Link } from 'react-router-dom';

import classes from './EndingMessage.module.css';

const EndingMessage = (props) => {

	let endingMessage = '';
	let buttonText = ''
	if(props.outcome === 'w') {
		endingMessage = 'Congratulations, your freedom shall be granted!  You have to promise though, No More Criminal Mischief!';
		buttonText = 'You Got It!'
	}	else if(props.outcome === 'l') {
		endingMessage = `I'm sorry, the word you were looking for was "${props.word}."  Perhaps you will read more in your next life...`;
		buttonText = 'I Regret Nothing';
	}

	return (
		<div className={classes.MessageDiv}>
			<h1 className={classes.Message}>{endingMessage}</h1>
			<Link to="/"><button className={classes.Button}>{buttonText}</button></Link>
		</div>
	);
}

export default EndingMessage;
