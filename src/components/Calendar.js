import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {navigation, views} from '../utils/constants'

import Month from './month/Month'
import Week from './week/Week'
import Day from './day/Day'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: props.events.sort((e1, e2) => e1.start.diff(e2.start)),
            displayTooltip: null,
            hoveredTimeSlot: null,
        }
        this.toggleTooltip = this.toggleTooltip.bind(this)
        this.closeTooltip = this.closeTooltip.bind(this)
        this.onClickDay = this.onClickDay.bind(this)
        this.onClickMore = this.onClickMore.bind(this)
        this.onDropEvent = this.onDropEvent.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
    }

    toggleTooltip(eventId) {
        this.setState({
            displayTooltip: eventId === this.state.displayTooltip ? null : eventId
        })
    }

    closeTooltip() {
        this.setState({
            displayTooltip: null,
        })
    }

    onClickDay(date) {
        if (this.props.onClickDay) {
            this.props.onClickDay(date)
        }
    }

    onClickMore(date) {
        if (this.props.onClickMore) {
            this.props.onClickMore(date)
        }
    }

    onDropEvent(eventId, date, hour) {
        const events = this.state.events.map(event => {
            if (event.id == eventId) {
                const diff = moment.duration(
                    event.end.diff(event.start)
                ).as('minutes')
                const start = moment(date).hour(hour)
                const end = moment(date).hour(hour).add(diff, 'minutes')
                return Object.assign({}, event, {
                    start,
                    end,
                })
            }
            return event
        })
        this.setState({
            events,
            hoveredTimeSlot: null,
        })
    }

    onDragEnter(day, hour) {
        this.setState({
            hoveredTimeSlot: {
                day,
                hour,
            }
        })
    }

    renderMonth() {
        return <Month
            date={this.props.date}
            events={this.state.events.filter(event => event.start.isSame(this.props.date, 'month'))}
            onClickMore={this.onClickMore}
            onClickDay={this.onClickDay}
            displayWeekend={this.props.displayWeekend}
            language={this.props.language}
            components={this.props.components}
            toggleTooltip={this.toggleTooltip}
            closeTooltip={this.closeTooltip}
            displayTooltip={this.state.displayTooltip}
        />
    }

    renderWeek() {
        const events = this.state.events.filter(event => {
            return event.start.isSame(this.props.date, 'week')
            && event.start.hour() >= this.props.startTime
            && event.end.hour() <= this.props.endTime
        })
        return <Week
            date={this.props.date}
            events={events}
            startTime={this.props.startTime}
            endTime={this.props.endTime}
            displayWeekend={this.props.displayWeekend}
            onDropEvent={this.onDropEvent}
            language={this.props.language}
            components={this.props.components}
            toggleTooltip={this.toggleTooltip}
            closeTooltip={this.closeTooltip}
            displayTooltip={this.state.displayTooltip}
            onDragEnter={this.onDragEnter}
            hoveredTimeSlot={this.state.hoveredTimeSlot}
        />
    }

    renderDay() {
        const events = this.state.events.filter(event => {
            return event.start.isSame(this.props.date, 'day')
            && event.start.hour() >= this.props.startTime
            && event.end.hour() <= this.props.endTime
        })
        return <Day
            date={this.props.date}
            events={events}
            startTime={this.props.startTime}
            endTime={this.props.endTime}
            onDropEvent={this.onDropEvent}
            language={this.props.language}
            components={this.props.components}
            toggleTooltip={this.toggleTooltip}
            closeTooltip={this.closeTooltip}
            displayTooltip={this.state.displayTooltip}
            onDragEnter={this.onDragEnter}
            hoveredTimeSlot={this.state.hoveredTimeSlot}
        />
    }

    renderCalendar() {
        switch (this.props.view) {
            case views.DAY:
                return this.renderDay()
            case views.WEEK:
                return this.renderWeek()
            case views.MONTH:
            default:
                return this.renderMonth()
        }
    }

    render() {
        return <div className="Calendar">
            {this.renderCalendar()}
        </div>
    }
}

Calendar.propTypes = {
    view: PropTypes.oneOf(['month', 'week', 'day']).isRequired,
    language: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
    components: PropTypes.object.isRequired,
    onClickMore: PropTypes.func,
    onClickDay: PropTypes.func,
}

Calendar.defaultProps = {
    view: 'month',
    date: moment().startOf('day'),
    events: [],
    startTime: 8,
    endTime: 20,
    displayWeekend: true,
    components: {},
}

export default Calendar
