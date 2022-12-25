import React, {useState} from 'react'
import FirstSection from '../Components/FirstSection'
import Experience from '../Components/Experience'
import Skills from '../Components/Skills'
import Form from '../Components/FormFunc'
import Admin from '../Components/Admin'
import LoginModal from '../Components/LoginModal'
import Projects from '../Components/Projects'
// import { FirebaseDatabaseProvider } from "@react-firebase/database";

function App() {
    const [admin, toggleAdmin] = useState(false)
    function handleLogin() { // prompt("Hi Owner!!");


    }

    function handleAdminPage() {
        console.log("Handler");

        toggleAdmin(!admin)
    }
    var admindisp = <div/>
    if (admin) {
        admindisp = <Admin admin={admin}/>
    }


    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">SHYAM KUMAR</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""/>
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contactme">contact me</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleLogin}
                            data-toggle="modal"
                            data-target="#LoginModal"
                            className="nav-link js-scroll-trigger"
                            href="#admin">ADMIN</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
            <FirstSection/>
            <hr className="m-0"/>
            <Experience/>
            <hr className="m-0"/>
            <Projects/>
            <hr className="m-0"/>

            <Skills/>
            <hr className="m-0"/>
            <Form/>
            <hr className="m-0"/> {admindisp}
            <LoginModal handleAdminPage={handleAdminPage}/>
        </div>
    </div>)
}

export default App
