import React from 'react';

import classes from './EndingMessage.module.css';

const EndingMessage = (props) => {

	let endingMessage = '';
	if(props.outcome === 'w') {
		endingMessage = 'You Win';
	}	else if(props.outcome === 'l') {
		endingMessage = 'You Lose';
	}

	return <h1 className={props.outcome === 'w' ? classes.WinningMessage : classes.LosingMessage}>{endingMessage}</h1>
}

export default EndingMessage;
