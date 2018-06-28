import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MonthDay from './MonthDay'

class MonthWeek extends React.Component {
    render() {
		const end = moment(this.props.date).endOf('isoWeek').add(1, 'd').date(),
        	days = []

        for (const date = moment(this.props.date); date.date() !== end; date.add(1, 'd')) {
            days.push({
                day: date.date(),
                month: date.month(),
            })
        }

    	return <div className="Calendar-Month-Grid-Week">
    		{days.map(date => {
    			return <MonthDay
    				key={date.day}
                    date={date.day}
    				outOfMonth={date.month !== this.props.selectedMonth}
                    events={this.props.events.filter(e => e.date.date() === date.day)}
                    language={this.props.language}
    			/>
    		})}
    	</div>
    }
}

MonthWeek.propTypes = {
    date: PropTypes.object.isRequired,
    selectedMonth: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
}

export default MonthWeek
