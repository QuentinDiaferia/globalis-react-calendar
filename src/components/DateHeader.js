import React from 'react'
import PropTypes from 'prop-types'
import {views} from '../utils/constants'

class DateHeader extends React.Component {
    renderDate() {
        const {
            view,
            date,
        } = this.props
        switch (view) {
            case views.WEEK:
                const start = date.startOf('week').format('DD/MM')
                const end = date.endOf('week').format('DD/MM')
                return `${start} - ${end}`
            case views.MONTH:
            default:
                return date.format('MM/YYYY')
        }
    }

    render() {
        return <div className="ToolBar-DateHeader">
            {this.renderDate()}
        </div>
    }
}

DateHeader.propTypes = {
    date: PropTypes.object.isRequired,
}

export default DateHeader
