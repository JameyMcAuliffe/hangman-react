import React from 'react';

import classes from './Key.module.css';

const Key = (props) => {
	return (
		
		<button 
			className={classes.Key} 
			val={props.val} 
			onClick={props.letterClick}>{props.letter}</button>
	);
}

export default Key;

// <div className={classes.Key} val={props.val} onClick={props.letterClick}>
// 			<h2>{props.letter}</h2>
// 		</div>
