import React from 'react'

function FirstSection() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Shyam
            <span className="text-primary">Kumar</span>
          </h1>
          <div className="subheading ">Full Stack WebDeveloper
          </div> <div className="subheading mb-5"><i className="fas fa-globe-asia"></i> Chennai,TamilNadu-600081,India · +91 9841873935 · 
            <a href="mailto:shyamkumar.on@gmail.com"> shyamkumar.on@gmail.com</a>
          </div>
          <p className="lead mb-5"><b>I'm a Full Stack Developer,</b><br/>
           When I watch my Creations in ACTION, <br/>
           huge Dopamine rushes in my BRAIN & drains through my VIEN</p>
          <div className="social-icons">
            <a  target="_blank" href="https://www.linkedin.com/in/5hy4m/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a target="_blank" href="https://github.com/5hy4m">
              <i className="fab fa-github" />
            </a>
            <a target="_blank" href="https://twitter.com/5hy4mkum4r">
              <i className="fab fa-twitter" />
            </a>
            <a target="_blank" href="https://www.instagram.com/5hy4m_kum4r/">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    )
}

export default FirstSection
