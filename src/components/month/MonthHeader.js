import React from 'react'
import {weekdays} from '../../utils/constants'

class MonthHeader extends React.Component {
    render() {
        return <div className="Calendar-Month-Header">
        	{weekdays.map(day => <div className="Calendar-Month-Header-Cell" key={day}>
    			{day}
    		</div>)}
        </div>
    }
}

export default MonthHeader
