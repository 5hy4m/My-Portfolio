import React from 'react';

const Projects = () => {
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex justify-content-center"
            id="projects">
            <div className="w-100">
                <h2 className="mb-5">Projects</h2>
                <div
                    className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Simple ChatRoom - React & Django</h3>
                        <div className="subheading mb-3"><a href="https://github.com/5hy4m/ChatRoom "><i className="fab fa-github" />   Github Link</a> </div>
                    </div>
                    <div className="resume-date text-md-right">
                    </div>
                </div>
                <div
                    className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">An Inventory Management System Still under development</h3>
                        <div className="subheading">Django REST Api</div>
                        <div className="subheading mb-3"><a href="https://github.com/5hy4m/ChatRoom "><i className="fab fa-github" />   Github Link</a> </div>
                            <div className="subheading">Frontend With React</div>
                            <div className="subheading mb-3"><a href="https://github.com/5hy4m/ChatRoom "><i className="fab fa-github" />   Github Link</a> </div>
                    </div>
                    <div className="resume-date text-md-right">
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Projects;
