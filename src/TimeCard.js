import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class TimeCard extends React.Component {

    render() {
        return(
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="description">
                                {this.props.date.toLocaleTimeString()}
                        </div>
                            <Link to="/confirm">
                            <div className="extra content">
                                    <div className="ui inverted green fluid animated toggle button" tabIndex="0" onClick={() => {this.props.syncSHour(this.props.date)}}>
                                        <div className="visible content">Confirm Time</div>
                                        <div className="hidden content">
                                            <i className="right arrow icon"></i>
                                        </div>
                                    </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>

        );
    }
}

