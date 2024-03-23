import React from 'react';
import skills from './data/skills.json';

function Skills() {
    return (
        <div className="outer-container bg-dark">
            <div className="container">
                <div className="skills-container row">
                    <h1 className="col-12">Skills</h1>
                    {skills.map((data) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 items">
                            <div className="item" key={data.key}>
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
