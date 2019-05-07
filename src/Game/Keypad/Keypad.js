import React from 'react';

import classes from './Keypad.module.css';
import Key from './Key/Key';

const Keypad = () => {

	const letterClick = (event) => {
		console.log(event.target.innerHTML);
	}

	return (
		<div>
			<div className={classes.KeypadDiv}>
				<Key letter="A" val="a" letterClick={letterClick}/>
				<Key letter="B" val="b" letterClick={letterClick}/>
				<Key letter="C" val="c" letterClick={letterClick}/>
				<Key letter="D" val="d" letterClick={letterClick}/>
				<Key letter="E" val="e" letterClick={letterClick}/>
			</div>
			<div className={classes.KeypadDiv}>
				<Key letter="F" val="f" letterClick={letterClick}/>
				<Key letter="G" val="g" letterClick={letterClick}/>
				<Key letter="H" val="h" letterClick={letterClick}/>
				<Key letter="I" val="i" letterClick={letterClick}/>
				<Key letter="J" val="j" letterClick={letterClick}/>
			</div>
			<div className={classes.KeypadDiv}>
				<Key letter="K" val="k" letterClick={letterClick}/>
				<Key letter="L" val="l" letterClick={letterClick}/>
				<Key letter="M" val="m" letterClick={letterClick}/>
				<Key letter="N" val="n" letterClick={letterClick}/>
				<Key letter="O" val="o" letterClick={letterClick}/>
			</div>
			<div className={classes.KeypadDiv}>
				<Key letter="P" val="p" letterClick={letterClick}/>
				<Key letter="Q" val="q" letterClick={letterClick}/>
				<Key letter="R" val="r" letterClick={letterClick}/>
				<Key letter="S" val="s" letterClick={letterClick}/>
				<Key letter="T" val="t" letterClick={letterClick}/>
			</div>
			<div className={classes.KeypadDiv}>
				<Key letter="U" val="u" letterClick={letterClick}/>
				<Key letter="V" val="v" letterClick={letterClick}/>
				<Key letter="W" val="w" letterClick={letterClick}/>
				<Key letter="X" val="x" letterClick={letterClick}/>
				<Key letter="Y" val="y" letterClick={letterClick}/>
			</div>
			<div className={classes.KeypadDiv}>
				<Key letter="Z" val="z" letterClick={letterClick}/>
			</div>
		</div>
	);
	
}

export default Keypad;
