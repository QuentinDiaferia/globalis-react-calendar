import React from 'react'
import moment from 'moment'
import Calendar from './components/Calendar'
import ToolBar from './components/ToolBar'
import Navigation from './components/Navigation'
import ViewSwitcher from './components/ViewSwitcher'
import SettingsForm from './components/SettingsForm'
import {navigation, views} from './utils/constants'

import {events, events2, events3} from './events'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: moment(),
            view: 'month',
            startTime: 8,
            endTime: 20,
            displayWeekend: true,
            displaySettingsForm: false,
        }
        this.onNavigate = this.onNavigate.bind(this)
        this.changeView = this.changeView.bind(this)
        this.changeSettings = this.changeSettings.bind(this)
        this.toggleSettingsForm = this.toggleSettingsForm.bind(this)
        this.onClickMore = this.onClickMore.bind(this)
        this.onClickDay = this.onClickDay.bind(this)
    }

    onNavigate(direction) {
        let date
        switch (direction) {
            case navigation.PREVIOUS:
                date = moment(this.state.date).subtract(1, this.state.view).startOf('day')
                break
            case navigation.NEXT:
                date = moment(this.state.date).add(1, this.state.view).startOf('day')
                break
            case navigation.TODAY:
            default:
                date = moment().startOf('day')
                break
        }
        this.setState({
            date,
        })
    }

    changeView(view) {
        let date = moment(this.state.date)
        if (this.state.view !== views.DAY) {
            date.startOf('week')
        }
        this.setState({
            date,
            view,
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

    onClickMore(date) {
        this.setState({
            view: views.DAY,
            date,
        })
    }

    onClickDay(date) {
        this.setState({
            date,
            view: views.DAY,
            displayTooltip: null,
        })
    }

    render() {
        const language = {
            label_previous: 'Précédent',
            label_next: 'Suivant',
            label_today: 'Aujourd\'hui',
            label_view_month: 'Mois',
            label_view_week: 'Semaine',
            label_view_day: 'Jour',
            label_more_link: 'autres',
            label_settings: 'Config',
        }
        return <React.Fragment>
            <ToolBar
                date={this.state.date}
                view={this.state.view}
                onNavigate={this.onNavigate}
                changeView={this.changeView}
                toggleSettingsForm={this.toggleSettingsForm}
                language={language}
            />
            {this.state.displaySettingsForm &&
                <SettingsForm
                    changeSettings={this.changeSettings}
                    displayWeekend={this.state.displayWeekend}
                    startTime={this.state.startTime}
                    endTime={this.state.endTime}
                    language={language}
                />
            }
            <Calendar
                view={this.state.view}
                date={this.state.date}
                startTime={this.state.startTime}
                endTime={this.state.endTime}
                displayWeekend={this.state.displayWeekend}
                onClickMore={this.onClickMore}
                onClickDay={this.onClickDay}
                events={events2}
                language={language}
            />
        </React.Fragment>
    }
}

export default App
