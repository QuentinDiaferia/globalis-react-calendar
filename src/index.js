import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'moment/locale/fr'
import 'utils/moment-ferie-fr'
import App from './App'

moment.locale('fr')

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
