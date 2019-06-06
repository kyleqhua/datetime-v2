import React from "react";
import 'react-day-picker/lib/style.css';
import TimeCard from './TimeCard.js';


export default class TimeRow extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            selectedDay: null,
        };
    }

    maps(listofTimes) {
        return listofTimes.map(time => <TimeCard
            date = {new Date(time)}
        >

        </TimeCard>
        )
    }
    render() {
        return (
            <div className= 'TimeRowHeader'>
                <div className= 'TimeRow'>
                    <p>Please pick a time.</p>
                    {this.maps(this.props.listTimes)}
                </div>
            </div>
        );
    }
}
