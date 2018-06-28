import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class MonthDay extends React.Component {
    render() {
        let className = 'Calendar-Month-Grid-Week-Day'
        if (this.props.outOfMonth) {
            className += ' Day-inactive'
        }
        return <div className={className}>
            <div className="day-index">{this.props.date.format('DD')}</div>
        </div>
    }
}

MonthDay.propTypes = {
    date: PropTypes.object.isRequired,
    outOfMonth: PropTypes.bool.isRequired,
}

export default MonthDay
