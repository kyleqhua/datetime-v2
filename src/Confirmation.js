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

    submitForm() {
        const EmailInput = document.querySelector("#Email");
        const FirstInput = document.querySelector("#First");
        const LastInput = document.querySelector("#Last");
        if (FirstInput.value === "") {
            FirstInput.classList.add("missing");
            window.alert("Fill in First Name");
        }
        if (LastInput.value === "") {
            LastInput.classList.add("missing");
            window.alert("Fill in Last Name");
        }
        if (EmailInput.value === "") {
            EmailInput.classList.add("missing");
            window.alert("Fill in Email");
        } else if (
            FirstInput.value != "" &&
            LastInput.value != "" &&
            EmailInput.value != ""
        ) {
            window.alert("Meeting Scheduled! Thank you " + FirstInput.value);
            if (FirstInput.classList.contains("missing")) {
                FirstInput.classList.remove("missing");
            }
            if (LastInput.classList.contains("missing")) {
                LastInput.classList.remove("missing");
            }
            if (EmailInput.classList.contains("missing")) {
                EmailInput.classList.remove("missing");
            }


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
                       <div className="visible content">Submit</div>
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
