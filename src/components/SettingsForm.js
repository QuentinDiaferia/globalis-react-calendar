import React from 'react'
import PropTypes from 'prop-types'

class SettingsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startTime: this.props.startTime,
            endTime: this.props.endTime,
            displayWeekend: this.props.displayWeekend,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleRadioChange(e) {
        const value = e.target.value === "1" ? true : false
        this.setState({
            [e.target.name]: value,
        })
    }

    handleSubmit(e) {
        this.props.changeSettings(
            parseInt(this.state.startTime),
            parseInt(this.state.endTime),
            !!this.state.displayWeekend,
        )
    }

    render() {
        return <div className="Calendar-SettingsForm">
            Min hour: <input type="text" size="2" value={this.state.startTime} name="startTime" onChange={this.handleChange} /><br />
            Max hour: <input type="text" size="2" value={this.state.endTime} name="endTime" onChange={this.handleChange} /><br />
            Display week-ends:
            <input
                type="radio"
                name="displayWeekend"
                value="0"
                checked={this.state.displayWeekend === false}
                onChange={this.handleRadioChange}
            /> No
            <input
                type="radio"
                name="displayWeekend"
                value="1"
                checked={this.state.displayWeekend === true}
                onChange={this.handleRadioChange}
            /> Yes
            <br />
            <button
                onClick={this.handleSubmit}
            >
                Save
            </button>
        </div>
    }
}

SettingsForm.propTypes = {
    language: PropTypes.object.isRequired,
    changeSettings: PropTypes.func.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    displayWeekend: PropTypes.bool.isRequired,
}

export default SettingsForm
