import moment from 'moment'

const colors = [null, '#33b679', '#3f51b5']
const start = moment('2018-05-01').startOf('month')
const events = []
for (let i = 1; i < 5000; i++) {
    events.push({
        id: i,
        label: "Un événement",
        start: moment(start),
        end: moment(start.add(2, 'h')),
        hex_color: colors[i % 3],
    })
}

const events2 = [
    {
        id: 1,
        label: "1",
        start: moment().hour(13).startOf('hour'),
        end: moment().hour(13).startOf('hour').add(1, 'hour'),
        hex_color: '#3f51b5',
    },
    {
        id: 2,
        label: "2",
        start: moment().hour(13).startOf('hour'),
        end: moment().hour(13).startOf('hour').add(1.5, 'hour'),
        hex_color: '#33b679',
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
        hex_color: '#33b679',
    },
    {
        id: 5,
        label: "5",
        start: moment().hour(11).startOf('hour'),
        end: moment().hour(11).startOf('hour').add(1, 'hour'),
    },
    {
        id: 6,
        label: "6",
        start: moment('2018-07-31').hour(11).startOf('hour'),
        end: moment('2018-07-31').hour(11).startOf('hour').add(1, 'hour'),
    },
    {
        id: 7,
        label: "7",
        start: moment('2018-08-05').hour(11).startOf('hour'),
        end: moment('2018-08-05').hour(11).startOf('hour').add(1, 'hour'),
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
            hex_color: colors[i % 3],
        })
        start3.add(0.25, 'h')
    } else {
        start3.add(1, 'd')
        start3.startOf('day')
    }
}

export {events, events2, events3}