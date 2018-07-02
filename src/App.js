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
        start: moment(start),
        end: moment(start.add(2, 'h')),
        className: colors[i % 3],
    })
}

const events2 = [
    {
        id: 1,
        label: "1",
        start: moment().hour(13).startOf('hour'),
        end: moment().hour(13).startOf('hour').add(1, 'hour'),
        className: 'Event-purple',
    },
    {
        id: 2,
        label: "2",
        start: moment().hour(13).startOf('hour'),
        end: moment().hour(13).startOf('hour').add(1.5, 'hour'),
        className: 'Event-green',
    },
    {
        id: 3,
        label: "3",
        start: moment().hour(15).startOf('hour'),
        end: moment().hour(15).startOf('hour').add(2, 'hour'),
    },
    {
        id: 4,
        label: "4",
        start: moment().hour(11).startOf('hour'),
        end: moment().hour(11).startOf('hour').add(3, 'hour'),
        className: 'Event-green',
    },
    {
        id: 5,
        label: "5",
        start: moment().hour(11).startOf('hour'),
        end: moment().hour(11).startOf('hour').add(1, 'hour'),
    },
]

const events3 = []
const start3 = moment('2018-06-25').startOf('day')
for (let i = 1; i < 2000; i++) {
    if (start3.hour() < 23) {
        events3.push({
            id: i,
            label: i,
            start: moment(start3),
            end: moment(start3).add(1, 'h'),
            className: colors[i % 3],
        })
        start3.add(0.25, 'h')
    } else {
        start3.add(1, 'd')
        start3.startOf('day')
    }
}


class App extends React.Component {
    render() {
        return <Calendar
            view='day'
            events={events2}
            startTime={8}
            endTime={20}
            displayWeekend={true}
            language={{
                label_previous: 'Précédent',
                label_next: 'Suivant',
                label_today: 'Aujourd\'hui',
                label_view_month: 'Mois',
                label_view_week: 'Semaine',
                label_view_day: 'Jour',
                label_more_link: 'autres'
            }}
        />
    }
}

export default App
