import React from 'react'
import PropTypes from 'prop-types'

class TimeSlot extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            className: '',
        }
        this.onDrop = this.onDrop.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
    }

    onDragOver(e) {
        e.preventDefault()
    }

    onDragEnter(e) {
        this.props.onDragEnter(this.props.date.date(), this.props.hour)
    }

    onDrop(e) {
        e.preventDefault()
        const eventId = e.dataTransfer.getData('eventId')
        this.props.onDropEvent(eventId, this.props.date, this.props.hour)
    }

    render() {
        let className = 'Calendar-Day-Grid-Content-TimeSlot'
        if (this.props.hoveredTimeSlot
            && this.props.hoveredTimeSlot.hour === this.props.hour
            && this.props.hoveredTimeSlot.day === this.props.date.date()
        ) {
            className += ' drag'
        }
        return <div
            className={className}
            onDragOver={this.onDragOver}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            onDrop={this.onDrop}
        >
        </div>
    }
}

TimeSlot.propTypes = {
    date: PropTypes.object.isRequired,
    hour: PropTypes.number.isRequired,
    onDropEvent: PropTypes.func.isRequired,
    onDragEnter: PropTypes.func.isRequired,
    hoveredTimeSlot: PropTypes.object,
}

export default TimeSlot
