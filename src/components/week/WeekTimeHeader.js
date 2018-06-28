import React from 'react'
import PropTypes from 'prop-types'

class WeekTimeHeader extends React.Component {
	renderHeader() {
		const times = []
		for (let i = 0; i < 24; i++) {
			times.push(i)
		}
		return times.map(i => {
			return <div className="Calendar-Week-Grid-TimeHeader-Time" key={i}>
				{i > 9 ? i : "0" + i}:00
			</div>
		})
	}

    render() {
        return <div className="Calendar-Week-Grid-TimeHeader">
        	{this.renderHeader()}
        </div>
    }
}

export default WeekTimeHeader
