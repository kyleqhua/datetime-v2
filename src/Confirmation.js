import React from 'react';
import './App.css';
import {Link} from "react-router-dom";


export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEndHour: null,
            firstName: null,
            lastName: null,
            email: null,

        };
    }



    render() {
        return (
            <div className= 'Frame'>
           <div className = 'confirmationForm'>
               <div className="row">
                   <Link to="/">
                       <div className="ui inverted red animated toggle button" tabIndex="0">
                           <div className="visible content">Back</div>
                           <div className="hidden content">
                               <i className="x icon"></i>
                           </div>
                       </div>
                   </Link>
               </div>
               <div className="row">
                   <div className="ui form">
                       <div className="inline fields">
                           <label>Please Select Duration of Meeting.</label>
                           <div className="field">
                               <div className="ui radio checkbox">
                                   <input type="radio" name="frequency"/>
                                       <label>15</label>
                               </div>
                           </div>
                           <div className="field">
                               <div className="ui radio checkbox">
                                   <input type="radio" name="frequency"/>
                                       <label>30</label>
                               </div>
                           </div>
                           <div className="field">
                               <div className="ui radio checkbox">
                                   <input type="radio" name="frequency"/>
                                       <label>60</label>
                               </div>
                           </div>
                       </div>
                   </div>

               </div>

               <div className="row">
                   <label>Email</label>
                   <input
                       type="text"
                       placeholder="Hi👨‍💻 @gmail.com"
                       id = "Email"
                   />
               </div>

               <div className="row">
                   <label>First Name</label>
                   <input type="text"
                          placeholder="🦕🦕🦕🦕🦕"
                          id = "First"
                   />
               </div>

               <div className="row">
                   <label>Last Name</label>
                   <input
                       type="text"
                       placeholder="🐧🐧🐧🐧🐧"
                       id = "Last"
                   />
               </div>
               <div className="row">
                   <div className="ui inverted green fluid animated toggle button" tabIndex="0" onClick={this.submitForm}>
                       <div className="visible content">{this.props.selectedDay.toLocaleString()}</div>
<div className="hidden content">
    <i className="check icon"></i>
</div>
</div>
</div>
</div>
</div>
);
}
}
