import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation'
import DateHeader from './DateHeader'
import ViewSwitcher from './ViewSwitcher'
import Settings from './Settings'

class ToolBar extends React.Component {
    render() {
        const {
            view,
            date,
            onNavigate,
            changeView,
            changeSettings,
            toggleSettingsForm,
            language,
        } = this.props
        const NavigationComponent = this.props.components.navigation || Navigation
        const ViewSwitcherComponent = this.props.components.viewSwitcher || ViewSwitcher
        const SettingsComponent = this.props.components.settings || Settings
        return <div className="ToolBar">
            <NavigationComponent
                onNavigate={onNavigate}
                language={language}
            />
            <DateHeader
                view={view}
                date={date}
            />
            <div className="ToolBar-SubGroup">
                <ViewSwitcherComponent
                    changeView={changeView}
                    language={language}
                />
                <SettingsComponent
                    language={language}
                    toggleSettingsForm={toggleSettingsForm}
                />
            </div>
        </div>
    }
}

ToolBar.propTypes = {
    view: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    language: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    toggleSettingsForm: PropTypes.func.isRequired,
    components: PropTypes.object.isRequired,
}

ToolBar.defaultProps = {
    components: {},
}

export default ToolBar
