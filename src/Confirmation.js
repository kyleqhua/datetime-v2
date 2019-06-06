import React from 'react';
import './App.css';


export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: null,
            selectedStartHour: 43200000,
            selectedEndHour: 61200000,
            firstName: null,
            lastName: null,

        };
    }


    render() {
        return (
           <div className = 'confirmationForm'>
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
                   />
               </div>

               <div className="row">
                   <label>First Name</label>
                   <input type="text"
                          placeholder="🦕🦕🦕🦕🦕"
                   />
               </div>

               <div className="row">
                   <label>Last Name</label>
                   <input
                       type="text"
                       placeholder="🐧🐧🐧🐧🐧"
                   />
               </div>

               <button id="submit-button">Submit</button>
           </div>
        );
    }
}
