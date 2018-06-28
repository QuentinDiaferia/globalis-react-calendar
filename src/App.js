import React from 'react'
import moment from 'moment'
import Calendar from './components/Calendar'

const events = [
    {
        label: "Un événement",
        date: moment(),
    },
    {
        label: "Un événement",
        date: moment(),
        className: 'Event-green'
    },
    {
        label: "Un événement",
        date: moment(),
    },
    {
        label: "Un événement",
        date: moment(),
        className: 'Event-green'
    },
    {
        label: "Un événement",
        date: moment(),
    },
    {
        label: "Un événement",
        date: moment().subtract(1, 'd'),
    },
    {
        label: "Un événement",
        date: moment().subtract(1, 'd'),
        className: 'Event-green'
    },
    {
        label: "Un événement",
        date: moment().subtract(5, 'd'),
        className: 'Event-green'
    },
]

class App extends React.Component {
    render() {
        return <Calendar
            view='month'
            language={{
            	label_previous: 'Précédent',
            	label_next: 'Suivant',
            	label_view_month: 'Mois',
            	label_view_week: 'Semaine',
                label_more_link: 'autres'
            }}
            events={events}
        />
    }
}

export default App
