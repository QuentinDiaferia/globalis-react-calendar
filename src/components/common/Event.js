import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from './Tooltip'

class Event extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            className: '',
            displayTooltip: false,
        }
        this.onDragOver = this.onDragOver.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
        this.onDragLeave = this.onDragLeave.bind(this)
        this.toggleTooltip = this.toggleTooltip.bind(this)
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

    toggleTooltip() {
        this.setState({
            displayTooltip: !this.state.displayTooltip,
        })
    }

    render() {
        const {
            event,
            style,
            draggable,
            onDragStart,
            components,
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
                onClick={this.toggleTooltip}
            >
                <div className='Calendar-Event-inner'>
                    {event.label}
                    {this.state.displayTooltip &&
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
}

Event.defaultProps = {
    style: {},
    draggable: false,
}

export default Event
