import React from 'react'
import PropTypes from 'prop-types'

import TimeSlotsHeader from '../common/TimeSlotsHeader'
import DayEvents from '../common/DayEvents'

class WeekGrid extends React.Component {
    render() {
        const {
            days,
            events,
            startTime,
            endTime,
            displayWeekend,
            onDropEvent,
            components,
            toggleTooltip,
            displayTooltip,
        } = this.props
        return <div className="Calendar-Week-Grid">
            <TimeSlotsHeader
                startTime={startTime}
                endTime={endTime}
            />
            {days.map(date => {
                if (!displayWeekend && [6, 7].indexOf(date.isoWeekday()) !== -1) {
                    return null
                }
                return <DayEvents
                    key={date.format('YYYY-MM-DD')}
                    date={date}
                    events={events.filter(e => e.start.date() === date.date())}
                    startTime={startTime}
                    endTime={endTime}
                    displayWeekend={displayWeekend}
                    onDropEvent={onDropEvent}
                    components={components}
                    toggleTooltip={toggleTooltip}
                    displayTooltip={displayTooltip}
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
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default WeekGrid
