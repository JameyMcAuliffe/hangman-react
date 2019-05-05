import React from 'react';

import classes from './Gallows.module.css';
import GallowsImg from '../../../images/gallows.png';

const Gallows = () => (
	<img src={GallowsImg} alt="gallows" className={classes.Gallows}/>
);

export default Gallows;
