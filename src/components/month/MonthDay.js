import React from 'react'
import PropTypes from 'prop-types'

class MonthDay extends React.Component {
    renderEvents(events) {
        return events.slice(0, 2).map((event, index) => {
            const className = 'Event' + (event.className ? ' ' + event.className : '')
            return <div className={className} key={event.id}>
                {event.label}
            </div>
        })
    }

    renderMoreLink(events) {
        if (events.length > 2) {
            return <a className="Event-More">
                +{events.length - 2} {this.props.language.label_more_link}
            </a>
        }
        return null
    }

    render() {
        let className = 'Calendar-Month-Grid-Week-Day'
        if (this.props.outOfMonth) {
            className += ' Day-inactive'
        }
        return <div className={className}>
            <div className="day-index">
                {this.props.date}
            </div>
            {this.renderEvents(this.props.events)}
            {this.renderMoreLink(this.props.events)}
        </div>
    }
}

MonthDay.propTypes = {
    date: PropTypes.number.isRequired,
    outOfMonth: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
}

export default MonthDay
