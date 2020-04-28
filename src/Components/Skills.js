import React from 'react'

function Skills() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python" />
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github" />
            </li>
            
          </ul>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check" />
              HTML, CSS, Bootstrap, Js, React, React Router, Axios, Redux, ContextApi
            </li>
            <li>
              <i className="fa-li fa fa-check" />
              Python 3, REST Api, Django 2.0, Django Rest Framework, Sql
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Skills
