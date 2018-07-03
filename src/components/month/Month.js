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
            displayWeekend,
            components,
            toggleTooltip,
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
                displayWeekend={displayWeekend}
                components={components}
                toggleTooltip={toggleTooltip}
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
    displayWeekend: PropTypes.bool.isRequired,
    components: PropTypes.object.isRequired,
    toggleTooltip: PropTypes.func.isRequired,
    displayTooltip: PropTypes.number,
}

export default Month
