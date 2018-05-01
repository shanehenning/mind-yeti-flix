import React from 'react'
import { connect } from 'react-fela'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

const App = ({ styles }) => (
	<div>
		<Header listlinkcolor={'rgb(48, 49, 49)'} />
		<Main className={styles.main} />
		<Footer background={'rgb(66, 83, 185)'} listlinkcolor={'rgb(255,255,255)'} />
	</div>
)

const mainStyle = () => ({
	margin: '0',
})

export default connect({
	mainStyle,
})(App)
