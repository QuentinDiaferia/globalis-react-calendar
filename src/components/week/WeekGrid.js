import React from 'react'
import PropTypes from 'prop-types'

import WeekTimeHeader from './WeekTimeHeader'
import WeekDay from './WeekDay'

class WeekGrid extends React.Component {
    render() {
    	return <div className="Calendar-Week-Grid">
            <WeekTimeHeader />
    		{this.props.days.map(date => {
    			return <WeekDay
                    key={date.date()}
                    date={date}
                    events={this.props.events.filter(e => e.start.date() === date.date())}
                />
    		})}
    	</div>
    }
}

WeekGrid.propTypes = {
    days: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
}

export default WeekGrid
