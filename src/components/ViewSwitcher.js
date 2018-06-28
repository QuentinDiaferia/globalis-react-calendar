import React from 'react'
import PropTypes from 'prop-types'
import {views} from '../utils/constants'

class ViewSwitcher extends React.Component {
    render() {
        return <div className="ToolBar-ViewSwitcher">
            <button onClick={e => this.props.changeView(views.MONTH)}>
                Month
            </button>
            <button onClick={e => this.props.changeView(views.WEEK)}>
                Week
            </button>
        </div>
    }
}

ViewSwitcher.propTypes = {
    changeView: PropTypes.func.isRequired,
}

export default ViewSwitcher
