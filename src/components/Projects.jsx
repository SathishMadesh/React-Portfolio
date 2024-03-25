import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Axios.get('https://sathishmadesh.github.io/projects-api/projects.json')
            .then((response) => {
                setProjects(response.data);
            });
    }, []);

    return (
        <div className="project-container bg-dark py-3" id="projects">
            <div className="container">
                <div className="row">
                    <h1 className="col-12 proj-title">Projects</h1>
                    {projects.map((data, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center align-content-center" 
                            data-aos="flip-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className="card text-light" style={{width: "auto", border:"2px solid orange", borderRadius:"20px", boxShadow:"5px 5px 10px 0px rgb(246, 217, 163)" }}>
                                <div className="img d-flex justify-content-center align-content-center p-3">
                                    <img src={data.image} className="card-img-top" alt="..." 
                                    style={{
                                        height: "220px",
                                        border: "2px solid black",
                                        borderRadius: "10px",
                                    }}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{data.title}</h5>
                                    <a href={data.gitlink} className="btn text-light">View Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
