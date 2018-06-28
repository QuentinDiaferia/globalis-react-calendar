import React from 'react'
import PropTypes from 'prop-types'

class WeekTimeSlot extends React.Component {
    render() {
        return <div className="Calendar-Week-Grid-Day-TimeSlot">

        </div>
    }
}

WeekTimeSlot.propTypes = {
    time: PropTypes.number.isRequired,
}

export default WeekTimeSlot
