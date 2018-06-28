import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MonthDay from './MonthDay'

class MonthWeek extends React.Component {
    render() {
		const start = moment(this.props.date).startOf('isoWeek'),
			end = moment(this.props.date).endOf('isoWeek'),
        	days = []

        for (const date = moment(start); date.isBefore(end); date.add(1, 'd')) {
            days.push(moment(date))
        }

    	return <div className="Calendar-Month-Grid-Week">
    		{days.map((date, index) => {
    			return <MonthDay
    				key={index}
    				date={date}
    				outOfMonth={date.month() !== this.props.selectedMonth}
    			/>
    		})}
    	</div>
    }
}

MonthWeek.propTypes = {
    date: PropTypes.object.isRequired,
    selectedMonth: PropTypes.number.isRequired,
}

export default MonthWeek
