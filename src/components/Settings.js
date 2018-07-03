import React from 'react'
import PropTypes from 'prop-types'

class Settings extends React.Component {
    render() {
        return <div className="Calendar-ToolBar-Settings">
            <button
                onClick={this.props.toggleSettingsForm}
                title={this.props.language.label_settings}
                className="Calendar-ToolBar-Settings"
            >
                {this.props.language.label_settings}
            </button>
        </div>
    }
}

Settings.propTypes = {
    language: PropTypes.object.isRequired,
    toggleSettingsForm: PropTypes.func.isRequired,
}

export default Settings
