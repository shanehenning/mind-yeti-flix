import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Player from '../Player'

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/play" component={Player} />
		</Switch>
	</main>
)

export default Main
