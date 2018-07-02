import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            className: '',
        }
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

    render() {
        const {
            event,
            style,
            draggable,
            onDragStart,
        } = this.props

        let className = 'Event'
        if (event.className) {
            className += ` ${event.className}`
        }
        if (this.state.className) {
            className += ` ${this.state.className}`
        }

        return <div
                style={style}
                className={className}
                key={event.id}
                draggable={draggable}
                onDragStart={onDragStart || null}
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
            >
                <div className='Event-inner'>
                    {event.label}
                </div>
        </div>
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    draggable: PropTypes.bool.isRequired,
    onDragStart: PropTypes.func,
}

Event.defaultProps = {
    style: {},
    draggable: false,
}

export default Event
