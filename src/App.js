import React from 'react';
import './App.css';
import 'react-day-picker/lib/style.css';
import TimeRow from './TimeRow.js'
import Calender from "./Calender";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startAvailHour: 43200000,
            endAvailHour: 61200000,
        };
    }

    setTimes() {
        const fifthteen = 900000;
        const thirty = 1800000;
        const hour = 3600000;
        let availTime = [];
        if (this.props.selectedDay !== null) {
            let time = this.props.selectedDay.getTime();
            for (let i = time + this.state.startAvailHour; i < time + this.state.endAvailHour; i = i + thirty) {
                availTime = availTime.concat(i);
            }
            return (<TimeRow listTimes = {availTime} day = {this.props.selectedDay} syncSHour = {this.props.syncSHour}/>);
        }
    }



    render() {
        return (
                <div className = 'Frame'>
                    <Calender setDay = {this.props.sync}/>
                    {this.setTimes()}
                </div>
        );
    }
}
