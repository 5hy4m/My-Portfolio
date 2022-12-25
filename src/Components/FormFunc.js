import React, {useState} from 'react'
import {msgsRef} from './firebase'
// import './form.css';

function Form() {
    const [thx, setThx] = useState(false);

    const ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return(true)
        }
        return(false)
    }
    const ValidatePhno = phno => {
        if (Number.isInteger(parseInt(phno))) {
            return true
        } else {
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('DATA SAVED');

        const uid = new Date().getTime().toString();
        const name = document.getElementsByClassName('name')[0].value;
        const email = document.getElementsByClassName('emailid')[0].value;
        const phno = document.getElementsByClassName('phno')[0].value;
        const msg = document.getElementsByClassName('msg')[0].value;
        const timestamp = new Date().toString();
        console.log(ValidatePhno(phno));

        if (ValidateEmail(email) && ValidatePhno(phno)) {
            msgsRef.push().set({
                uid,
                name,
                email,
                phno,
                msg,
                timestamp
            });
            setThx(!thx)
        } else {
            alert("Invalid Email or Phone number")
            document.getElementsByClassName('emailid')[0].value = ""
            document.getElementsByClassName('phno')[0].value = ""
        }
        console.log('DATA SAVED');
    }

    if (thx) {
        var content = <section
        className="resume-section p-3 p-lg-5 justify-content-center"
        id="contactme"> < h1 className = "thx" > Thank YOu. <span className="text-primary">
            I'll Get back to you shortly!</span>
    </h1> < /section>
}
else {

    var content = <section className="resume-section p-3 p-lg-5 justify-content-center" id="contactme">
        <div className="contactme w-100">
            <h2 className="mb-5">Contact Me</h2 > </div>
            <div className=" formcontent d-flex w-100">
                <form action="post w-100">
                    <label className="subheading mb-3" htmlFor="fname">Name:</label>
                    <input required="true" className="ml-2 name shadow" type="text" id="fname" name="fname"/><br/>
                    <label className="subheading  mb-3" htmlFor="lname">Email id:</label>
                    <input required="true" className="ml-2 emailid shadow" type="text" id="lname" name="lname"/><br/>
                    <label className="subheading mb-3" htmlFor="lname">Phone Number:</label>
                    <input required="true" className="ml-2 shadow phno" type="text" id="lname" name="lname"/><br/>
                    <textarea rows="4" placeholder="Message" className="shadow msg"/><br/><br/> {/* <input className = "ml-2" type="text" id="lname" name="lname" defaultValue="Doe"/><br/><br/> */}
                    <input onClick={handleSubmit}
                        type="submit"
                        className="btn btncolor "
                        defaultValue="Submit"/>
                </form>
            </div>
        </section>
    }
    return(content)
}
export default Form
