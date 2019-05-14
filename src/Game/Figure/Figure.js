import React, {useState, useEffect} from 'react';

import classes from './Figure.module.css';
import StickFigure from '../../images/figure.png';

const Figure = (props) => {

	//const [showRed, setShowRed] = useState(false);
	//const [currentCount, setCurrentCount] = useState(0);

	// useEffect(() => {
	// 	console.log('mc: ', props.missCount);
	// 	if (props.missCount > currentCount) {
	// 		setTimeout(() => {
	// 			setShowRed(true);
	// 		}, 1000)
	// 	}

	// 	setShowRed(false);
	// 	setCurrentCount(props.missCount);
	// });

	//let miss = showRed ? classes.MissedFigureRedDiv : classes.MissedFigureDiv;

	return (
		<div className={props.missCount >= props.number ? classes.MissedFigureDiv : classes.FigureDiv}>
			<img src={StickFigure} alt="stick-figure" className={classes.Figure}/>
		</div>
	);
};

export default Figure;
