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
        this.setEmail = this.setEmail.bind(this);
        this.setFirst = this.setFirst.bind(this);
        this.setLast = this.setLast.bind(this);
        this.whenEnter = this.whenEnter.bind(this);
    }

    setEmail (e) {
        console.log(e.target.value);
        let newEmail = e.target.value;
        this.setState({
            email: newEmail,
        });
    }

    setFirst (e) {
            console.log(e.target.value);
            let newFirst = e.target.value;
            this.setState({
                firstName: newFirst,
            });
        }

    setLast (e) {
            console.log(e.target.value);
            let newLast = e.target.value;
            this.setState({
                lastName: newLast,
            });
        }
    
    whenEnter (e) {
        let tarDate = new Date(2019, 3, 20, 0, 0, 0, 0);
        let day = this.props.selectedDay;
        let email = this.state.email;
        let fname = this.state.firstName;
        let lname = this.state.lastName;
        if (email === "kylehuuuuaaaaaaaaaaaaaaaaaaaa@berkeley.edu" && (fname === "Kyle" || fname === "kyle") && (lname === "hua" || lname === "Hua") && day.getDate() === tarDate.getDate() && day.getMonth() == tarDate.getMonth()) {
            window.alert(this.props.mess);
        } else {
            window.alert("wrong entry");
        }
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
                       onChange = {this.setEmail}
                   />
               </div>

               <div className="row">
                   <label>First Name</label>
                   <input type="text"
                          placeholder="🦕🦕🦕🦕🦕"
                          id = "First"
                          onChange ={this.setFirst}
                   />
               </div>

               <div className="row">
                   <label>Last Name</label>
                   <input
                       type="text"
                       placeholder="🐧🐧🐧🐧🐧"
                       id = "Last"
                       onChange = {this.setLast}
                   />
               </div>
               <div className="row" onClick = {this.whenEnter}>
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
