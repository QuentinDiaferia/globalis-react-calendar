import React from 'react'
import {weekDays} from '../../utils/constants'

class MonthHeader extends React.Component {
    render() {
        return <div className="Calendar-Month-Header">
        	{weekDays.map(day => <div className="Calendar-Month-Header-Cell" key={day}>
        		{day}
        	</div>)}
        </div>
    }
}

export default MonthHeader
