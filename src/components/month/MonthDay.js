import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class MonthDay extends React.Component {
    renderEvents(events) {
        const moreLink = false
        if (events.slice(0, 2).length) {
            return events.slice(0, 2).map((event, index) => {
                const className = 'Event' + (event.className ? ' ' + event.className : '')
                return <div className={className} key={index}>
                    {event.label}
                </div>
            })
        }
        return null
    }

    renderMoreLink(events) {
        if (events.length > 2) {
            return <div className="Event-More">
                +{events.length - 2} {this.props.language.label_more_link}
            </div>
        }
        return null
    }

    render() {
        const events = this.props.events.filter(e => e.date.isSame(this.props.date, 'day'))
        let className = 'Calendar-Month-Grid-Week-Day'
        if (this.props.outOfMonth) {
            className += ' Day-inactive'
        }
        return <div className={className}>
            <div className="day-index">
                {this.props.date.format('DD')}
            </div>
            {this.renderEvents(events)}
            {this.renderMoreLink(events)}
        </div>
    }
}

MonthDay.propTypes = {
    date: PropTypes.object.isRequired,
    outOfMonth: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
}

export default MonthDay
