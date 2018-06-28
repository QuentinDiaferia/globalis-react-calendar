import React from 'react'
import Calendar from './components/Calendar'

class App extends React.Component {
    render() {
        return <Calendar
            view='week'
        />
    }
}

export default App
