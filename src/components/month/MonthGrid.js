import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MonthWeek from './MonthWeek'

class Month extends React.Component {
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
                key={date.week()}
                date={date}
                selectedMonth={selectedMonth}
                events={this.props.events.filter(event => event.start.week() === date.week())}
                language={this.props.language}
                onClickMore={this.props.onClickMore}
                displayWeekend={this.props.displayWeekend}
                components={this.props.components}
                toggleTooltip={this.toggleTooltip}
                displayTooltip={this.state.displayTooltip}
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
}

export default Month
