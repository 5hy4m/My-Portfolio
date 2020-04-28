import React from 'react'

function Experience() {
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex justify-content-center"
            id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                <div
                    className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Developer</h3>
                        <div className="subheading mb-3">Tata Consultancy Services</div>
                        <p>Working on the Innovation labs as a Developer. Currently working on chatbots</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Sep 2019 - Current</span>
                    </div>
                </div>
                <div
                    className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Data Science Intern</h3>
                        <div className="subheading mb-3">GeakMinds Technologies</div>
                        <p>Got internship in a Data Science team. Learnt to use jupyter Notebook and other python libraries like pandas, 
                            numpy, matplotlib</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">14th Nov 2018 - 14th Dec 2018</span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Experience
