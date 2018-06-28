import React from 'react'
import moment from 'moment'
import Calendar from './components/Calendar'

const colors = [null, 'Event-green', 'Event-purple']
const start = moment('2018-05-01').startOf('month')
const events = []
for (let i = 1; i < 5000; i++) {
    events.push({
        id: i,
        label: "Un événement",
        date: moment(start),
        className: colors[i % 3],
    })
    start.add(1, 'h')
    if (start.day() === 6) {
        start.add(2, 'd')
    }
}

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
