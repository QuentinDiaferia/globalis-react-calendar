import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {navigation, views} from '../utils/constants'

import ToolBar from './ToolBar'
import Month from './month/Month'
import Week from './week/Week'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: props.view,
            date: moment(props.date),
            events: props.events,
        }
        this.renderCalendar = this.renderCalendar.bind(this)
        this.changeView = this.changeView.bind(this)
        this.onNavigate = this.onNavigate.bind(this)
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
            default:
                this.setState({date: this.state.date.add(1, this.state.view)})
                break
        }
    }

    renderMonth() {
        return <Month
            date={this.state.date}
            events={this.state.events.filter(event => event.start.isSame(this.state.date, 'month'))}
            language={this.props.language}
        />
    }

    renderWeek() {
        return <Week
            date={this.state.date}
            events={this.state.events.filter(event => event.start.isSame(this.state.date, 'week'))}
            language={this.props.language}
        />
    }

    renderCalendar() {
        switch (this.state.view) {
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
    view: PropTypes.oneOf(['month', 'week']).isRequired,
    language: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
}

Calendar.defaultProps = {
    view: 'month',
    date: moment(),
    events: [],
}

export default Calendar
