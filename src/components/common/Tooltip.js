import React from 'react'
import PropTypes from 'prop-types'

class Tooltip extends React.Component {
    render() {
        const {
            event,
            topPosition,
        } = this.props
        return <div
            className="Calendar-Tooltip"
            onClick={e => e.stopPropagation()}
            style={{
                top: topPosition,
            }}
        >
            <div className="Calendar-Tooltip-Title">
                {event.label}
                <div>
                    <a onClick={e => this.props.closeTooltip()}>close</a>
                </div>
            </div>
            <div className="Calendar-Tooltip-Content">
                Event id : {event.id}
            </div>
        </div>
    }
}

Tooltip.propTypes = {
    event: PropTypes.object.isRequired,
    closeTooltip: PropTypes.func.isRequired,
    topPosition: PropTypes.string,
}

export default Tooltip
