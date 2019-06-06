import React from "react";

export default class TimeCard extends React.Component {
    render() {
        return(
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="description">
                                {this.props.date.toLocaleTimeString()}
                        </div>
                                    <div className="ui inverted green fluid animated toggle button" tabIndex="0">
                                        <div className="visible content">Confirm Time</div>
                                        <div className="hidden content">
                                            <i className="right arrow icon"></i>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>

        );
    }
}

