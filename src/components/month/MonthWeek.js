import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MonthDay from './MonthDay'

class MonthWeek extends React.Component {
    render() {
        const end = moment(this.props.date).endOf('isoWeek').add(1, 'd').date(),
            days = []

        for (const date = moment(this.props.date); date.date() !== end; date.add(1, 'd')) {
            days.push(moment(date))
        }

        return <div className="Calendar-Month-Grid-Week">
            {days.map(date => {
                if (!this.props.displayWeekend && [6, 7].indexOf(date.isoWeekday()) !== -1) {
                    return null
                }
                return <MonthDay
                    key={date.format('YYYY-MM-DD')}
                    date={date}
                    outOfMonth={date.month() !== this.props.selectedMonth}
                    events={this.props.events.filter(e => e.start.date() === date.date())}
                    language={this.props.language}
                    onClickMore={this.props.onClickMore}
                    components={this.props.components}
                    toggleTooltip={this.props.toggleTooltip}
                    displayTooltip={this.props.displayTooltip}
                />
            })}
        </div>
    }
}

MonthWeek.propTypes = {
    date: PropTypes.object.isRequired,
    selectedMonth: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
    onClickMore: PropTypes.func.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default MonthWeek
