import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import WeekHeader from './WeekHeader'
import WeekGrid from './WeekGrid'

class Week extends React.Component {
    render() {
		const start = moment(this.props.date).startOf('week'),
			end = moment(this.props.date).endOf('week'),
        	days = []

        for (const date = moment(start); date.isBefore(end); date.add(1, 'd')) {
            days.push(moment(date))
        }
        return <div className="Calendar-Week">
            <WeekHeader
                days={days}
              />
            <WeekGrid
                days={days}
            />
        </div>
    }
}

Week.propTypes = {
    date: PropTypes.object.isRequired,
}

export default Week
