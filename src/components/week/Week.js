import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import WeekGrid from './WeekGrid'

class Week extends React.Component {
    render() {
        const end = moment(this.props.date).endOf('week').add(1, 'd').date(),
            days = []

        for (const date = moment(this.props.date).startOf('week'); date.date() !== end; date.add(1, 'd')) {
            days.push(moment(date))
        }

        return <div className="Calendar-Week">
            <WeekGrid
                days={days}
                events={this.props.events}
                startTime={this.props.startTime}
                endTime={this.props.endTime}
                displayWeekend={this.props.displayWeekend}
                onDropEvent={this.props.onDropEvent}
                components={this.props.components}
                toggleTooltip={this.props.toggleTooltip}
                closeTooltip={this.props.closeTooltip}
                displayTooltip={this.props.displayTooltip}
                onDragEnter={this.props.onDragEnter}
                hoveredTimeSlot={this.props.hoveredTimeSlot}
            />
        </div>
    }
}

Week.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
    onDropEvent: PropTypes.func.isRequired,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    closeTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
    onDragEnter: PropTypes.func.isRequired,
    hoveredTimeSlot: PropTypes.object,
}

export default Week
