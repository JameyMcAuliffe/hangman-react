import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Game from './Game/Game';
import Home from './Home/Home';

function App() {
  return (
  	<Router>
	    <div className="App">
	    	<Switch>
	    		<Route exact path="/" component={Home} />
	    		<Route exact path="/game" component={Game} />
	      </Switch>
	    </div>
	  </Router>
  );
}

export default App;

