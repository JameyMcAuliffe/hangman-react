import React from 'react';

import classes from './Background.module.css';
import BackgroundImage from '../../images/background.png';

const Background = () => (	
	<img src={BackgroundImage} alt="background" className={classes.Background}/>
);

export default Background;

