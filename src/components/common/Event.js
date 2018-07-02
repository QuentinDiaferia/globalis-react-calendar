import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
    render() {
        const {
            event,
            style,
            draggable,
            onDragStart,
        } = this.props
        const className = 'Event' + (event.className ? ` ${event.className}` : '')
        return <div
                style={style}
                className={className}
                key={event.id}
                draggable={draggable}
                onDragStart={onDragStart || null}
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
