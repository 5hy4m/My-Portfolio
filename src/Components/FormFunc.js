import React from 'react'
import {msgsRef} from '../firebase'
import './form.css';

function Form() {



    const handleSubmit = (e) => {
        e.preventDefault();
        
        const uid = new Date().getTime().toString();
        const name = document.getElementsByClassName('name')[0].value;
        const email = document.getElementsByClassName('emailid')[0].value;
        const phno = document.getElementsByClassName('phno')[0].value;
        const msg = document.getElementsByClassName('msg')[0].value;
        msgsRef.push().set({
            uid,
            name,
            email,
            phno,
            msg,
        });
        console.log('DATA SAVED');
    }


    return (
        <section
                className="resume-section p-3 p-lg-5 justify-content-center"
                id="contactme">
                <div className="contactme w-100">
                    <h2 className="mb-5">Contact Me</h2>
                </div>
                <div className=" formcontent d-flex justify-content-center w-100">
                    <form action="post  w-100">
                        <label className="subheading mb-3" htmlFor="fname">Name:</label>
                        <input className="ml-2 name shadow" type="text" id="fname" name="fname"/><br/>
                        <label className="subheading  mb-3" htmlFor="lname">Email id:</label>
                        <input className="ml-2 emailid shadow" type="text" id="lname" name="lname"/><br/>
                        <label className="subheading mb-3" htmlFor="lname">Phone Number:</label>
                        <input className="ml-2 shadow phno" type="text" id="lname" name="lname"/><br/>
                        <textarea rows="4" placeholder="Message" className="shadow msg"/><br/><br/> {/* <input className = "ml-2" type="text" id="lname" name="lname" defaultValue="Doe"/><br/><br/> */}
                        <input type="submit" onClick={handleSubmit} className="btn btncolor " defaultValue="Submit"/>
                    </form>
                </div>
            </section>
    )
}

export default Form
