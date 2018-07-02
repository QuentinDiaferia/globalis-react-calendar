import moment from 'moment'

export const navigation = {
    PREVIOUS: 'prev',
    NEXT: 'next',
}

export const views = {
    MONTH: 'month',
    WEEK: 'week',
}

const daysIndexes = []
for (let i = 1; i < 8; i++) {
	daysIndexes.push(moment().isoWeekday(i).format('dddd'))
}
export const weekdays = daysIndexes.map(day => day.charAt(0).toUpperCase() + day.slice(1))
