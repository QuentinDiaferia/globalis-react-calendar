import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MonthWeek from './MonthWeek'

class Month extends React.Component {
    renderWeeks() {
        const selectedMonth = this.props.date.month(),
            start =  moment(this.props.date).startOf('month').startOf('isoWeek'),
            end = moment(this.props.date).endOf('month').add(1, 'week').week(),
            weeks = []

        for (const date = start; date.week() !== end; date.add(1, 'week')) {
            weeks.push(moment(date))
        }

        return weeks.map(date => {
            return <MonthWeek
                key={date.format('YYYY-w')}
                date={date}
                selectedMonth={selectedMonth}
                events={this.props.events.filter(event => event.start.week() === date.week())}
                language={this.props.language}
                onClickMore={this.props.onClickMore}
                displayWeekend={this.props.displayWeekend}
                components={this.props.components}
                toggleTooltip={this.props.toggleTooltip}
                displayTooltip={this.props.displayTooltip}
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
    onClickMore: PropTypes.func.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default Month
