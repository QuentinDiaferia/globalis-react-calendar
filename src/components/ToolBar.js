import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation'
import DateHeader from './DateHeader'
import ViewSwitcher from './ViewSwitcher'

class ToolBar extends React.Component {
    render() {
        return <div className="ToolBar">
            <Navigation
                onNavigate={this.props.onNavigate}
            />
            <DateHeader
                view={this.props.view}
                date={this.props.date}
            />
            <ViewSwitcher
                changeView={this.props.changeView}
            />
        </div>
    }
}

ToolBar.propTypes = {
    view: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
}

export default ToolBar
