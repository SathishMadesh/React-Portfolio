import React from 'react';
import skills from './data/skills.json';

function Skills() {
    return (
        <div className="outer-container bg-dark" id="skills">
            <div className="container">
                <div className="skills-container row">
                    <h1 className="col-12">Skills</h1>
                    {skills.map((data,index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 items" data-aos="zoom-in-down" data-aos-duration="2000">
                            <div className="item">
                                <img src={data.image} alt={data.title} className="img-fluid" />
                                <h3>{data.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
