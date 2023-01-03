import React, { useState } from 'react';
import FirstSection from './FirstSection';
import Experience from './Experience';
import Skills from './Skills';
import Form from './FormFunc';
import Admin from './Admin';
import Projects from './Projects';
import { adminApp } from '../firebase';

function App() {
  const [admin, toggleAdmin] = useState(false);
  const [messages, setMessages] = useState([]);

  async function handleLogin() {
    adminApp().then((messageRef) =>
      messageRef.on(
        'value',
        (snapshot) => {
          let data = [];
          const db = snapshot.val();
          Object.keys(db).forEach((element) => {
            data.push(db[element]);
          });
          setMessages(data);
          toggleAdmin(true);
        },
        (err) =>
          err.code === 'PERMISSION_DENIED'
            ? alert('Unauthorized Access')
            : alert('Internal server error')
      )
    );
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">SHYAM KUMAR</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="img/profile.jpg"
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contactme">
                contact me
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handleLogin()}
                data-toggle="modal"
                data-target="#LoginModal"
                className="nav-link js-scroll-trigger"
                href="#admin"
              >
                ADMIN
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid p-0">
        <FirstSection />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Projects />
        <hr className="m-0" />

        <Skills />
        <hr className="m-0" />
        <Form />
        <hr className="m-0" />
        {admin ? <Admin messages={messages} /> : null}
      </div>
    </div>
  );
}

export default App;
