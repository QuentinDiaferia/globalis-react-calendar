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
            components,
            displayTooltip,
            closeTooltip,
            toggleTooltip,
        } = this.props

        const TooltipComponent = components.tooltip || null

        if (event.hex_color) {
            style.backgroundColor = event.hex_color
        }

        return <React.Fragment>
            <div
                className='Calendar-Event'
                style={style}
                key={event.id}
                draggable={draggable}
                onDragStart={onDragStart || null}
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
                onClick={() => toggleTooltip(event.id)}
            >
                <div className='Calendar-Event-Inner'>
                    {event.label}
                </div>
            </div>
            {displayTooltip && TooltipComponent &&
                <TooltipComponent
                    event={event}
                    topPosition={style.top}
                    closeTooltip={closeTooltip}
                />
            }
        </React.Fragment>
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    draggable: PropTypes.bool.isRequired,
    onDragStart: PropTypes.func,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    closeTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.bool,
}

Event.defaultProps = {
    style: {},
    draggable: false,
    displayTooltip: false,
}

export default Event
