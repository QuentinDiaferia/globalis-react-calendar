import React from 'react'
import PropTypes from 'prop-types'

class Tooltip extends React.Component {
    render() {
    	const {
    		event,
    	} = this.props
        return <div
            className="Calendar-Tooltip"
            onClick={e => e.stopPropagation()}
        >
        	<div className="Calendar-Tooltip-Title">
        		{event.label}
        	</div>
        	<div className="Calendar-Tooltip-Content">
        		Event id : {event.id}
        	</div>
        </div>
    }
}

Tooltip.propTypes = {
    event: PropTypes.object.isRequired,
}

export default Tooltip
