import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MonthWeek from './MonthWeek'

class Month extends React.Component {
    renderWeeks() {
        const selectedMonth = this.props.date.month(),
            start =  moment(this.props.date).startOf('month').startOf('isoWeek'),
            end = moment(this.props.date).endOf('month').endOf('isoWeek'),
            weeks = []

        for (const date = start; date.isBefore(end); date.add(1, 'week')) {
            weeks.push(moment(date))
        }

        return weeks.map((date, index) => {
            return <MonthWeek
                key={index}
                date={date}
                selectedMonth={selectedMonth}
                events={this.props.events}
                language={this.props.language}
            />
        })
    }

    render() {
        return <div className="Calendar-Month-Grid">
            {this.renderWeeks()}
        </div>
    }
}

Month.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
}

export default Month
