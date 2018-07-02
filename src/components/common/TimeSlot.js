import React from 'react'
import PropTypes from 'prop-types'

class TimeSlot extends React.Component {

	constructor(props) {
		super(props)
		this.onDrop = this.onDrop.bind(this)
	}

	onDragOver(e) {
		e.preventDefault()
	}

	onDrop(e) {
		e.preventDefault()
		const eventId = e.dataTransfer.getData('eventId')
		this.props.onDropEvent(eventId, this.props.date, this.props.hour)
	}

    render() {
        return <div
        	className="Calendar-Day-Grid-Content-TimeSlot"
        	onDragOver={this.onDragOver}
        	onDrop={this.onDrop}
        >
        </div>
    }
}

TimeSlot.propTypes = {
	date: PropTypes.object.isRequired,
    hour: PropTypes.number.isRequired,
    onDropEvent: PropTypes.func.isRequired,
}

export default TimeSlot
