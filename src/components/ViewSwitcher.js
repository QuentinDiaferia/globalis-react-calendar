import React from 'react'
import PropTypes from 'prop-types'
import {views} from '../utils/constants'

class ViewSwitcher extends React.Component {
    render() {
        return <div className="ToolBar-ViewSwitcher">
            <button
                onClick={e => this.props.changeView(views.MONTH)}
                title={this.props.language.label_view_month}
                className="ToolBar-ViewSwitcher-Month"
            >
                {this.props.language.label_view_month}
            </button>
            <button
                onClick={e => this.props.changeView(views.WEEK)}
                title={this.props.language.label_view_week}
                className="ToolBar-ViewSwitcher-Week"
            >
                {this.props.language.label_view_week}
            </button>
            <button
                onClick={e => this.props.changeView(views.DAY)}
                title={this.props.language.label_view_day}
                className="ToolBar-ViewSwitcher-Day"
            >
                {this.props.language.label_view_day}
            </button>
        </div>
    }
}

ViewSwitcher.propTypes = {
    language: PropTypes.object.isRequired,
    changeView: PropTypes.func.isRequired,
}

export default ViewSwitcher
