import React from 'react'
import PropTypes from 'prop-types'

import MonthHeader from './MonthHeader'
import MonthGrid from './MonthGrid'

class Month extends React.Component {
    render() {
        return <div className="Calendar-Month">
            <MonthHeader />
            <MonthGrid
                date={this.props.date}
            />
        </div>
    }
}

Month.propTypes = {
    date: PropTypes.object.isRequired,
}

export default Month
