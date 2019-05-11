import React from 'react';

import classes from './Key.module.css';

const Key = (props) => {


	return (
		
		<button 
			disabled={!props.selected ? false : true}
			className={!props.selected ? classes.Key : classes.KeySelected} 
			val={props.val} 
			onClick={props.letterClick}>{props.letter}</button>
	);
}

export default Key;
