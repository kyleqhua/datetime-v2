import React from "react";
import Confirmation from "./Confirmation";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: null,
            selectedStartHour: null,
            selectedEndHour: null,
        };
    }

    syncDates(day){
        day.setHours(0)
        this.setState({
            selectedDay: day,
        });
    }

    syncSHour(start){
        this.setState({
            selectedStartHour: start,
        });
    }

    render() {
        return (
            <Router>
                <Route exact path= "/"  render={(props) => <App sync = {this.syncDates.bind(this)}  selectedDay = {this.state.selectedDay} syncSHour = {this.syncSHour.bind(this)}/>} />
                <Route path = "/confirm" render={(props) => <Confirmation selectedDay = {this.state.selectedDay} />}  />
            </Router>
        );
    }
}