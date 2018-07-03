import React from 'react'
import PropTypes from 'prop-types'
import {navigation} from '../utils/constants'

class Navigation extends React.Component {
    render() {
        return <div className="Calendar-ToolBar-Navigation">
            <button
                onClick={e => this.props.onNavigate(navigation.PREVIOUS)}
                title={this.props.language.label_previous}
                className="Calendar-ToolBar-Navigation-Previous"
            >
                {this.props.language.label_previous}
            </button>
            <button
                onClick={e => this.props.onNavigate(navigation.TODAY)}
                title={this.props.language.label_today}
                className="Calendar-ToolBar-Navigation-Today"
            >
                {this.props.language.label_today}
            </button>
            <button
                onClick={e => this.props.onNavigate(navigation.NEXT)}
                title={this.props.language.label_next}
                className="Calendar-ToolBar-Navigation-Next"
            >
                {this.props.language.label_next}
            </button>
        </div>
    }
}

Navigation.propTypes = {
    language: PropTypes.object.isRequired,
    onNavigate: PropTypes.func.isRequired,
}

export default Navigation
