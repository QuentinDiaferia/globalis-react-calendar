import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import TimeSlotsHeader from '../common/TimeSlotsHeader'
import DayEvents from '../common/DayEvents'

class Day extends React.Component {
    render() {
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
                onDropEvent={this.props.onDropEvent}
            />
        </div>
    }
}

Day.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    onDropEvent: PropTypes.func.isRequired,
}

export default Day
