import React, {useState, useEffect} from 'react'
import {msgsRef} from './firebase'

function Admin(props) {
        const [messages, setmessages] = useState('');
        useEffect(() => {
            msgsRef.on('value', snapshot => {
                let data = []
                const db = snapshot.val()
                Object.keys(db).forEach(element => {
                    data.push(db[element])
                });
                setmessages(data)
            });
        }, [props]);
        console.log(messages);

        const msgs = messages === '' ? <div>
        LODAING < /div> : messages.map((x, index) =>< div key = {
            index
        }
        className = "resume-item d-flex flex-column flex-md-row justify-content-between mb-5" > <div className="resume-content">
            <h3 className="mb-0">
                {
                x.name
            }</h3 > <div className="subheading mb-3"> Email : {
            x.email
        } || Phone No : {
            x.phno
        } < /div>
            <p>{
                x.msg
            }</p > </div> < div className = "resume-date text-md-right" > <span className="text-primary"> Date & Time : {
            x.timestamp
        } < /span>
        </div > </div>
    )
    return (<section className="resume-section p-3 p-lg-5 justify-content-center" id="contactme">
        <div className="contactme w-100">
            <h2 className="mb-5">Admin</h2>
        </div>
        {msgs} </section>)
}

export default Admin
