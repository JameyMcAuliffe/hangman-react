import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import HomeImg from '../images/home.png';
import classes from './Home.module.css';

const Home = () => {

	const INTRUCTIONS = "You are a criminal, a scoundrel, not worthy of life, and are scheduled for the gallows at high noon.  However, while your guilt is indisputable, I fancy myself a gaming Sheriff, and offer you one chance at redemption...I'm thinking of a word, to you, a very important word, and if you can guess it, the prize will be your freedom.  The game is Hangman.";

	const [showInstructions, setShowInstructions] = useState(false);

	let toggleInstructions = () => {
		setShowInstructions(true);
	}

	let title = <h1 onClick={toggleInstructions} className={classes.Hangman}>HANGMAN</h1>

	return (
		<div className={classes.Main}>
			<img src={HomeImg} alt="home" className={classes.Background}/>
			{showInstructions ? <div className={classes.InstructionsDiv}>
				<h1 className={classes.Instructions}>{INTRUCTIONS}</h1>
				<h1 className={classes.Instructions}>It doesn't have to make sense, you just have to play.</h1>
				<h1 className={classes.Signature}>- Sheriff McAuliffe</h1>
				<Link to="/game"><button className={classes.Button}>Begin</button></Link> 
			</div> : title}
		</div>
	);
}

export default Home;
