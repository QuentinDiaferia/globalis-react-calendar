import React from 'react'
import PropTypes from 'prop-types'

class TimeSlot extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			className: '',
		}
		this.onDrop = this.onDrop.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
        this.onDragLeave = this.onDragLeave.bind(this)
    }

    onDragOver(e) {
        e.preventDefault()
    }

    onDragEnter(e) {
        this.setState({
            className: 'drag'
        })
    }

    onDragLeave(e) {
        this.setState({
            className: ''
        })
    }

	onDrop(e) {
		e.preventDefault()
		this.setState({
			className: ''
		})
		const eventId = e.dataTransfer.getData('eventId')
		this.props.onDropEvent(eventId, this.props.date, this.props.hour)
	}

    render() {
    	let className = 'Calendar-Day-Grid-Content-TimeSlot'
    	if (this.state.className) {
    		className += ` ${this.state.className}`
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
}

export default TimeSlot
