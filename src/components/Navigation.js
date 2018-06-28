import React from 'react'
import PropTypes from 'prop-types'
import {navigation} from '../utils/constants'

class Navigation extends React.Component {
    render() {
        return <div className="ToolBar-Navigation">
            <button onClick={e => this.props.onNavigate(navigation.PREVIOUS)}>
                Previous
            </button>
            <button onClick={e => this.props.onNavigate(navigation.NEXT)}>
                Next
            </button>
        </div>
    }
}

Navigation.propTypes = {
    onNavigate: PropTypes.func.isRequired,
}

export default Navigation
