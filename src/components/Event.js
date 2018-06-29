import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
    render() {
        const {
            event,
            style,
        } = this.props
        const className = 'Event' + (event.className ? ` ${event.className}` : '')
        return <div
                style={style}
                className={className}
                key={event.id}
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
}

Event.defaultProps = {
    style: {},
}

export default Event
