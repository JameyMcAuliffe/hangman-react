import React from 'react';

import classes from './Letter.module.css';

const Letter = (props) => {
	return (
		<h1 className={classes.Letter}>{props.letter}</h1>
	);
};

export default Letter;
