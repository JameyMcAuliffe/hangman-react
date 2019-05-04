import React from 'react';

import classes from './Background.module.css';
import BackgroundImage from '../../images/background.png';
import Gallows from '../../images/gallows.png';

const Background = () => (
	<div className={classes.Div}>	
		<img src={BackgroundImage} alt="background-image" className={classes.Background}/>
		<img src={Gallows} alt="gallows" className={classes.Gallows}/>
	</div>
);

export default Background;
