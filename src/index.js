import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const renderer = createRenderer()

ReactDOM.render(
	<BrowserRouter>
		<Provider renderer={renderer}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
registerServiceWorker()
