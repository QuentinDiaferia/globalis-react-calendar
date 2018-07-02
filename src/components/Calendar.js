import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {navigation, views} from '../utils/constants'

import ToolBar from './ToolBar'
import SettingsForm from './SettingsForm'
import Month from './month/Month'
import Week from './week/Week'
import Day from './day/Day'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: props.view,
            date: moment(props.date).startOf('day'),
            events: props.events.sort((e1, e2) => e1.start.diff(e2.start)),
            startTime: props.startTime,
            endTime: props.endTime,
            displayWeekend: props.displayWeekend,
            displaySettingsForm: false,
        }
        this.renderCalendar = this.renderCalendar.bind(this)
        this.changeView = this.changeView.bind(this)
        this.changeSettings = this.changeSettings.bind(this)
        this.onNavigate = this.onNavigate.bind(this)
        this.onClickMore = this.onClickMore.bind(this)
        this.onDropEvent = this.onDropEvent.bind(this)
        this.toggleSettingsForm = this.toggleSettingsForm.bind(this)
    }

    changeView(view) {
        this.setState({
            date: this.state.date.startOf('week'),
            view
        })
    }

    changeSettings(startTime, endTime, displayWeekend) {
        this.setState({
            startTime,
            endTime,
            displayWeekend,
            displaySettingsForm: false,
        })
    }

    toggleSettingsForm() {
        this.setState({
            displaySettingsForm: !this.state.displaySettingsForm,
        })
    }

    onNavigate(direction) {
        let date
        switch (direction) {
            case navigation.PREVIOUS:
                date = this.state.date.subtract(1, this.state.view).startOf('day')
                break
            case navigation.NEXT:
                date = this.state.date.add(1, this.state.view).startOf('day')
                break
            case navigation.TODAY:
            default:
                date = moment().startOf('day')
                break
        }
        this.setState({date})
    }

    onClickMore(date) {
        this.setState({
            view: views.DAY,
            date,
        })
    }

    onDropEvent(eventId, date, hour) {
        const events = this.state.events.map(event => {
            if (event.id == eventId) {
                const diff = moment.duration(
                    event.end.diff(event.start)
                ).as('minutes')
                const start = moment(date).hour(hour)
                const end = moment(date).hour(hour).add(diff, 'minutes')
                return Object.assign({}, event, {
                    start,
                    end,
                })
            }
            return event
        })
        this.setState({events})
    }

    renderMonth() {
        return <Month
            date={this.state.date}
            events={this.state.events.filter(event => event.start.isSame(this.state.date, 'month'))}
            onClickMore={this.onClickMore}
            displayWeekend={this.state.displayWeekend}
            language={this.props.language}
        />
    }

    renderWeek() {
        const events = this.state.events.filter(event => {
            return event.start.isSame(this.state.date, 'week')
            && event.start.hour() >= this.state.startTime
            && event.end.hour() <= this.state.endTime
        })
        return <Week
            date={this.state.date}
            events={events}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            displayWeekend={this.state.displayWeekend}
            onDropEvent={this.onDropEvent}
            language={this.props.language}
        />
    }

    renderDay() {
        const events = this.state.events.filter(event => {
            return event.start.isSame(this.state.date, 'day')
            && event.start.hour() >= this.state.startTime
            && event.end.hour() <= this.state.endTime
        })
        return <Day
            date={this.state.date}
            events={events}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            onDropEvent={this.onDropEvent}
            language={this.props.language}
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
        const ToolBarComponent = this.props.components.toolbar || ToolBar
        const SettingsFormComponent = this.props.components.settingsForm || SettingsForm
        return <div className="Calendar">
            <ToolBarComponent
                date={this.state.date}
                view={this.state.view}
                onNavigate={this.onNavigate}
                changeView={this.changeView}
                toggleSettingsForm={this.toggleSettingsForm}
                language={this.props.language}
                components={this.props.components}
            />
            {this.state.displaySettingsForm &&
                <SettingsFormComponent
                    changeSettings={this.changeSettings}
                    language={this.props.language}
                    startTime={this.state.startTime}
                    endTime={this.state.endTime}
                    displayWeekend={this.state.displayWeekend}
                />
            }
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
    components: PropTypes.object.isRequired,
}

Calendar.defaultProps = {
    view: 'month',
    date: moment(),
    events: [],
    startTime: 8,
    endTime: 20,
    displayWeekend: true,
    components: {},
}

export default Calendar
