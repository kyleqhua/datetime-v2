import React from "react";
import Calender from "./Calender";
import Confirmation from "./Confirmation";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export default class TestRouter extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                                <div className="ui cards">
                                    <div className="card">
                                        <div className="content">
                                            <div className="description">
                                                Hello
                                            </div>
                                            <div className="extra content">
                                                <Link to="/confirm">
                                                <div className="ui inverted green fluid animated toggle button" tabIndex="0">
                                                    <div className="visible content"></div>
                                                    <div className="hidden content">
                                                         <i className="right arrow icon"></i>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        <ul>
                            <li>
                                <Link to="/cal">Calender</Link>
                            </li>
                            <li>
                                <Link to="/confirm">Confirm</Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Calender} />
                        <Route path="/cal" component={Calender} />
                        <Route path="/confirm" component={Confirmation} />
                    </div>
                </Router>
            </div>
        );
    }
}