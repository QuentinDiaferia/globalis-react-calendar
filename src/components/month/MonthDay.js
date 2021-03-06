import React from 'react'
import PropTypes from 'prop-types'

import Event from '../common/Event'

class MonthDay extends React.Component {
    renderEvents(events) {
        return events.slice(0, 2).map(event => {
            return <Event
                key={event.id}
                event={event}
                components={this.props.components}
                toggleTooltip={this.props.toggleTooltip}
                closeTooltip={this.props.closeTooltip}
                displayTooltip={this.props.displayTooltip === event.id}
            />
        })
    }

    renderMoreLink(events) {
        if (events.length > 2) {
            return <a
                className="Calendar-Event-More"
                onClick={() => this.props.onClickMore(this.props.date)}
            >
                +{events.length - 2} {this.props.language.label_more_link}
            </a>
        }
        return null
    }

    render() {
        const {
            date,
            events,
            outOfMonth,
            onClickDay,
        } = this.props

        let className = 'Calendar-Month-Grid-Week-Day'
        if (outOfMonth) {
            className += ' Calendar-Month-Grid-Week-Day-OutOfMonth'
        }

        return <div className={className}>
            <div className="Calendar-Month-Grid-Week-Day-Header">
                <div className="Calendar-Month-Grid-Week-Day-Header-Holiday">
                    {date.getFerie()}
                </div>
                <div
                    className="Calendar-Month-Grid-Week-Day-Header-Index"
                    onClick={() => onClickDay(date)}
                >
                    {date.date()}
                </div>
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
    onClickMore: PropTypes.func.isRequired,
    onClickDay: PropTypes.func.isRequired,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    closeTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default MonthDay
