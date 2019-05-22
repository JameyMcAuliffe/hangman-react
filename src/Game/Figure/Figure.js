import React from 'react';

import classes from './Figure.module.css';
import StickFigure from '../../images/figure.png';

const Figure = (props) => {

	return (
		<div className={props.missCount >= props.number ? classes.MissedFigureDiv : classes.FigureDiv}>
			<img src={StickFigure} alt="stick-figure" className={classes.Figure}/>
		</div>
	);
};

export default Figure;
