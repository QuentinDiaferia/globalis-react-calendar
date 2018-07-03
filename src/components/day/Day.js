import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import TimeSlotsHeader from '../common/TimeSlotsHeader'
import DayEvents from '../common/DayEvents'

class Day extends React.Component {
    render() {
        const {
            date,
            events,
            startTime,
            endTime,
            onDropEvent,
            toggleTooltip,
            closeTooltip,
            displayTooltip,
            components,
        } = this.props
        return <div className="Calendar-Day">
            <TimeSlotsHeader
                startTime={startTime}
                endTime={endTime}
            />
            <DayEvents
                date={date}
                events={events.filter(e => e.start.date() === date.date())}
                startTime={startTime}
                endTime={endTime}
                onDropEvent={onDropEvent}
                components={components}
                toggleTooltip={toggleTooltip}
                closeTooltip={closeTooltip}
                displayTooltip={displayTooltip}
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
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    closeTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default Day
