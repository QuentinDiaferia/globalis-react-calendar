import React from 'react'
import PropTypes from 'prop-types'

import WeekTimeHeader from './WeekTimeHeader'
import WeekDay from './WeekDay'

class WeekGrid extends React.Component {
    render() {
    	return <div className="Calendar-Week-Grid">
            <WeekTimeHeader />
    		{this.props.days.map((date, index) => {
    			return <WeekDay
                    key={index}
                    date={date}
                />
    		})}
    	</div>
    }
}

WeekGrid.propTypes = {
    days: PropTypes.array.isRequired,
}

export default WeekGrid
