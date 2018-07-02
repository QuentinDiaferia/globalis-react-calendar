import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {views} from '../utils/constants'

class DateHeader extends React.Component {
    renderDate() {
        const {
            view,
            date,
        } = this.props
        switch (view) {
            case views.DAY:
                const day = this.props.date.format('ddd DD MMMM')
                return day.charAt(0).toUpperCase() + day.slice(1)
            case views.WEEK:
                const start = date.startOf('week').format('DD/MM')
                const end = date.endOf('week').format('DD/MM')
                return `${start} - ${end}`
            case views.MONTH:
            default:
                const month = date.format('MMMM YYYY')
                return month.charAt(0).toUpperCase() + month.slice(1)
        }
    }

    render() {
        return <div className="Calendar-ToolBar-DateHeader">
            {this.renderDate()}
        </div>
    }
}

DateHeader.propTypes = {
    view: PropTypes.string,
    date: PropTypes.object.isRequired,
}

export default DateHeader
