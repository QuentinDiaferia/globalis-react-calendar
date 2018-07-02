import React from 'react'
import PropTypes from 'prop-types'

import TimeSlotsHeader from '../common/TimeSlotsHeader'
import DayEvents from '../common/DayEvents'

class WeekGrid extends React.Component {
    render() {
    	return <div className="Calendar-Week-Grid">
            <TimeSlotsHeader
                startTime={this.props.startTime}
                endTime={this.props.endTime}
            />
    		{this.props.days.map(date => {
                if (!this.props.displayWeekend && [6, 7].indexOf(date.isoWeekday()) !== -1) {
                    return null
                }
    			return <DayEvents
                    key={date.date()}
                    date={date}
                    events={this.props.events.filter(e => e.start.date() === date.date())}
                    startTime={this.props.startTime}
                    endTime={this.props.endTime}
                    displayWeekend={this.props.displayWeekend}
                    onDropEvent={this.props.onDropEvent}
                />
    		})}
    	</div>
    }
}

WeekGrid.propTypes = {
    days: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
    onDropEvent: PropTypes.func.isRequired,
}

export default WeekGrid
