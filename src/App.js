import React from 'react'
import moment from 'moment'
import Calendar from './components/Calendar'

/*const colors = [null, 'Event-green', 'Event-purple']
const start = moment('2018-05-01').startOf('month')
const events = []
for (let i = 1; i < 5000; i++) {
    events.push({
        id: i,
        label: "Un événement",
        start: moment(start),
        end: moment(start.add(2, 'h')),
        className: colors[i % 3],
    })
}*/

const events = [
    {
        id: 4,
        label: "4",
        start: moment().startOf('hour').subtract(2, 'hour'),
        end: moment().startOf('hour').add(1, 'hour'),
    },
    {
        id: 5,
        label: "5",
        start: moment().startOf('hour').subtract(2, 'hour'),
        end: moment().startOf('hour').subtract(1, 'hour'),
    },
    {
        id: 1,
        label: "1",
        start: moment().startOf('hour'),
        end: moment().startOf('hour').add(1, 'hour'),
    },
    {
        id: 2,
        label: "2",
        start: moment().startOf('hour'),
        end: moment().startOf('hour').add(1.5, 'hour'),
    },
    {
        id: 3,
        label: "3",
        start: moment().startOf('hour'),
        end: moment().startOf('hour').add(4, 'hour'),
    },
]

class App extends React.Component {
    render() {
        return <Calendar
            view='week'
            events={events}
            language={{
                label_previous: 'Précédent',
                label_next: 'Suivant',
                label_view_month: 'Mois',
                label_view_week: 'Semaine',
                label_more_link: 'autres'
            }}
        />
    }
}

export default App
