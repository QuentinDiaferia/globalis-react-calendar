import React from 'react'
import PropTypes from 'prop-types'

import TimeSlotsHeader from '../common/TimeSlotsHeader'
import DayEvents from '../common/DayEvents'

class WeekGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayTooltip: null,
        }
        this.toggleTooltip = this.toggleTooltip.bind(this)
    }

    toggleTooltip(eventId) {
        this.setState({
            displayTooltip: eventId === this.state.displayTooltip ? null : eventId
        })
    }

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
                    key={date.format('YYYY-MM-DD')}
                    date={date}
                    events={this.props.events.filter(e => e.start.date() === date.date())}
                    startTime={this.props.startTime}
                    endTime={this.props.endTime}
                    displayWeekend={this.props.displayWeekend}
                    onDropEvent={this.props.onDropEvent}
                    components={this.props.components}
                    toggleTooltip={this.toggleTooltip}
                    displayTooltip={this.state.displayTooltip}
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
}

export default WeekGrid
