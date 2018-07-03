import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from './Tooltip'

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
            components,
            displayTooltip,
            toggleTooltip,
        } = this.props

        const TooltipComponent = components.tooltip || Tooltip

        let className = 'Calendar-Event'
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
            onClick={() => toggleTooltip(event.id)}
        >
            <div className='Calendar-Event-inner'>
                {event.label}
                {displayTooltip &&
                    <TooltipComponent
                        event={event}
                    />
                }
            </div>
        </div>
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    draggable: PropTypes.bool.isRequired,
    onDragStart: PropTypes.func,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.bool,
}

Event.defaultProps = {
    style: {},
    draggable: false,
    displayTooltip: false,
}

export default Event
