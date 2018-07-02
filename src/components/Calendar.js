import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {navigation, views} from '../utils/constants'

import ToolBar from './ToolBar'
import Month from './month/Month'
import Week from './week/Week'
import Day from './day/Day'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: props.view,
            date: moment(props.date),
            events: props.events.sort((e1, e2) => e1.start.diff(e2.start)),
        }
        this.renderCalendar = this.renderCalendar.bind(this)
        this.changeView = this.changeView.bind(this)
        this.onNavigate = this.onNavigate.bind(this)
        this.onClickMore = this.onClickMore.bind(this)
    }

    changeView(view) {
        this.setState({view})
    }

    onNavigate(direction) {
        switch (direction) {
            case navigation.PREVIOUS:
                this.setState({date: this.state.date.subtract(1, this.state.view)})
                break
            case navigation.NEXT:
                this.setState({date: this.state.date.add(1, this.state.view)})
                break
            case navigation.TODAY:
            default:
                this.setState({date: moment()})
                break
        }
    }

    onClickMore(date) {
        this.setState({
            view: views.DAY,
            date,
        })
    }

    renderMonth() {
        return <Month
            date={this.state.date}
            events={this.state.events.filter(event => event.start.isSame(this.state.date, 'month'))}
            language={this.props.language}
            onClickMore={this.onClickMore}
            displayWeekend={this.props.displayWeekend}
        />
    }

    renderWeek() {
        const events = this.state.events.filter(event => {
            return event.start.isSame(this.state.date, 'week')
            && event.start.hour() >= this.props.startTime
            && event.end.hour() <= this.props.endTime
        })
        return <Week
            date={this.state.date}
            events={events}
            language={this.props.language}
            startTime={this.props.startTime}
            endTime={this.props.endTime}
            displayWeekend={this.props.displayWeekend}
        />
    }

    renderDay() {
        const events = this.state.events.filter(event => {
            return event.start.isSame(this.state.date, 'day')
            && event.start.hour() >= this.props.startTime
            && event.end.hour() <= this.props.endTime
        })
        return <Day
            date={this.state.date}
            events={events}
            language={this.props.language}
            startTime={this.props.startTime}
            endTime={this.props.endTime}
        />
    }

    renderCalendar() {
        switch (this.state.view) {
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
            <ToolBar
                date={this.state.date}
                view={this.state.view}
                onNavigate={this.onNavigate}
                changeView={this.changeView}
                language={this.props.language}
            />
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
}

Calendar.defaultProps = {
    view: 'month',
    date: moment(),
    events: [],
    startTime: 8,
    endTime: 20,
    displayWeekend: true,
}

export default Calendar
