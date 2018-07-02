import React from 'react'
import PropTypes from 'prop-types'

import MonthHeader from './MonthHeader'
import MonthGrid from './MonthGrid'

class Month extends React.Component {
    render() {
        return <div className="Calendar-Month">
            <MonthHeader
                displayWeekend={this.props.displayWeekend}
            />
            <MonthGrid
                date={this.props.date}
                events={this.props.events}
                language={this.props.language}
                onClickMore={this.props.onClickMore}
                displayWeekend={this.props.displayWeekend}
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
}

export default Month
