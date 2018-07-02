import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation'
import DateHeader from './DateHeader'
import ViewSwitcher from './ViewSwitcher'

class ToolBar extends React.Component {
    render() {
        const {
            view,
            date,
            onNavigate,
            changeView,
            language,
        } = this.props
        return <div className="ToolBar">
            <Navigation
                onNavigate={onNavigate}
                language={language}
            />
            <DateHeader
                view={view}
                date={date}
            />
            <ViewSwitcher
                changeView={changeView}
                language={language}
            />
        </div>
    }
}

ToolBar.propTypes = {
    view: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    language: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
}

export default ToolBar
