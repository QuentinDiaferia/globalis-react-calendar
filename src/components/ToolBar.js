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
        return <div className="Calendar-ToolBar">
            <Navigation
                onNavigate={onNavigate}
                language={language}
            />
            <DateHeader
                view={view}
                date={date}
            />
            <div className="Calendar-ToolBar-SubGroup">
                <ViewSwitcher
                    changeView={changeView}
                    language={language}
                />
                <Settings
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
}

ToolBar.defaultProps = {
    components: {},
}

export default ToolBar
