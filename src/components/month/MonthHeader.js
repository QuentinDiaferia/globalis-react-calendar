import React from 'react'
import PropTypes from 'prop-types'
import {weekdays} from '../../utils/constants'

class MonthHeader extends React.Component {
    render() {
        return <div className="Calendar-Month-Header">
            {weekdays.map((day, index) => {
                if (!this.props.displayWeekend && [5, 6].indexOf(index) !== -1) {
                    return null
                }
                return <div className="Calendar-Month-Header-Cell" key={day}>
                    {day}
                </div>
            })}
        </div>
    }
}

MonthHeader.propTypes = {
    displayWeekend: PropTypes.bool.isRequired,
}

export default MonthHeader
