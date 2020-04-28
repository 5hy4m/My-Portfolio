import React, {Component} from 'react'
import Firebase from 'firebase';
import config from '../config';

export default class Form extends Component {
    constructor(props) {
        super(props);
        console.log('calling');
        Firebase.initializeApp(config.firebase);
    }

    // writeUserData = () => {
    //     Firebase
    //         .database()
    //         .ref('/')
    //         .set(this.state);
    //     console.log('DATA SAVED');
    // }

    handleSubmit = () => {
        const uid = new Date().getTime().toString();
        const name = document.getElementsByClassName('name');
        const email = document.getElementsByClassName('emailid');
        const phno = document.getElementsByClassName('phno');
        const msg = document.getElementsByClassName('msg');
        Firebase.database().ref('/').set({
            Messages:{
                uid,
                name,
                email,
                phno,
                msg,
            }
        });
        console.log('DATA SAVED');
    }

    render() {
        return (
            <section
                className="resume-section p-3 p-lg-5 justify-content-center"
                id="contactme">
                <div className="contactme w-100">
                    <h2 className="mb-5">Contact Me</h2>
                </div>
                <div className=" formcontent d-flex w-100">
                    <form action="post w-100">
                        <label className="subheading mb-3" htmlFor="fname">Name:</label>
                        <input className="ml-2 name shadow" type="text" id="fname" name="fname"/><br/>
                        <label className="subheading  mb-3" htmlFor="lname">Email id:</label>
                        <input className="ml-2 emailid shadow" type="text" id="lname" name="lname"/><br/>
                        <label className="subheading mb-3" htmlFor="lname">Phone Number:</label>
                        <input className="ml-2 shadow phno" type="text" id="lname" name="lname"/><br/>
                        <textarea rows="4" placeholder="Message" className="shadow msg"/><br/><br/> {/* <input className = "ml-2" type="text" id="lname" name="lname" defaultValue="Doe"/><br/><br/> */}
                        <input type="submit" className="btn btncolor " defaultValue="Submit"/>
                    </form>
                </div>
            </section>
        )
    }
}
