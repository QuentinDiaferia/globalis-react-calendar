import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import TimeSlotsHeader from '../common/TimeSlotsHeader'
import DayEvents from '../common/DayEvents'

class Day extends React.Component {
    render() {
		const end = moment(this.props.date).endOf('week').add(1, 'd').date(),
        	days = []

        for (const date = moment(this.props.date).startOf('week'); date.date() !== end; date.add(1, 'd')) {
            days.push(moment(date))
        }

        return <div className="Calendar-Day">
            <TimeSlotsHeader
                startTime={this.props.startTime}
                endTime={this.props.endTime}
            />
            <DayEvents
                date={this.props.date}
                events={this.props.events.filter(e => e.start.date() === this.props.date.date())}
                startTime={this.props.startTime}
                endTime={this.props.endTime}
            />
        </div>
    }
}

Day.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
}

export default Day