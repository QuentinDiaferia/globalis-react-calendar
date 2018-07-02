import React from 'react'
import PropTypes from 'prop-types'
import {navigation} from '../utils/constants'

class Navigation extends React.Component {
    render() {
        return <div className="ToolBar-Navigation">
            <button
                onClick={e => this.props.onNavigate(navigation.PREVIOUS)}
                title={this.props.language.label_previous}
                className="ToolBar-Navigation-Previous"
            >
                {this.props.language.label_previous}
            </button>
            <button
                onClick={e => this.props.onNavigate(navigation.TODAY)}
                title={this.props.language.label_today}
                className="ToolBar-Navigation-Today"
            >
                {this.props.language.label_today}
            </button>
            <button
                onClick={e => this.props.onNavigate(navigation.NEXT)}
                title={this.props.language.label_next}
                className="ToolBar-Navigation-Next"
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
