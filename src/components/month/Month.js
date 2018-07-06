import React from 'react'
import PropTypes from 'prop-types'

import MonthHeader from './MonthHeader'
import MonthGrid from './MonthGrid'

class Month extends React.Component {
    render() {
        const {
            date,
            events,
            language,
            onClickMore,
            onClickDay,
            displayWeekend,
            components,
            toggleTooltip,
            closeTooltip,
            displayTooltip,
        } = this.props
        return <div className="Calendar-Month">
            <MonthHeader
                displayWeekend={displayWeekend}
            />
            <MonthGrid
                date={date}
                events={events}
                language={language}
                onClickMore={onClickMore}
                onClickDay={onClickDay}
                displayWeekend={displayWeekend}
                components={components}
                toggleTooltip={toggleTooltip}
                closeTooltip={closeTooltip}
                displayTooltip={displayTooltip}
            />
        </div>
    }
}

Month.propTypes = {
    date: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    language: PropTypes.object.isRequired,
    onClickMore: PropTypes.func.isRequired,
    onClickDay: PropTypes.func.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    closeTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default Month
