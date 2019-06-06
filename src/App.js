import React from 'react';
import './App.css';
import 'react-day-picker/lib/style.css';
import TimeRow from './TimeRow.js'
import Calender from "./Calender";
import Confirmation from "./Confirmation";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: null,
            startAvailHour: 43200000,
            endAvailHour: 61200000,
        };
    }

    setTimes() {
        const fifthteen = 900000;
        const thirty = 1800000;
        const hour = 3600000;
        let availTime = [];
        if (this.state.selectedDay !== null) {
            let time = this.state.selectedDay.getTime();
            for (let i = time + this.state.startAvailHour; i < time + this.state.endAvailHour; i = i + thirty) {
                availTime = availTime.concat(i);
            }
            return (<TimeRow listTimes = {availTime} day = {this.state.selectedDay}/>);
        }
    }
    setDay(day) {
        day.setHours(0)
        this.setState({
            selectedDay: day,
        });
    }

    render() {
        return (
            <div className = 'Frame'>
                <Confirmation/>
                <Calender setDay = {this.setDay.bind(this)}/>
                {this.setTimes()}
            </div>
        );
    }
}
