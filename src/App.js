import React from 'react'

import Calendar from './components/Calendar'

class App extends React.Component {
    render() {
        return <Calendar
            view='month'
            language={{
            	label_previous: 'Précédent',
            	label_next: 'Suivant',
            	label_view_month: 'Mois',
            	label_view_week: 'Semaine',
            }}
        />
    }
}

export default App
