import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Axios.get('https://sathishmadesh.github.io/projects-api/projects.json')
            .then((response) => {
                setProjects(response.data);
            });
    }, [])

    return (
        <>
            <div className="project-container bg-dark py-3 ">
                
                <div className="container">
                    <div className="row ">
                    <h1 className="col-12 proj-title">Projects</h1>
                        {projects.map((data) => (<>
                            <div key={data.id} className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center align-content-center">
                                <div className="card text-light" style={{width: "auto", border:"2px solid orange", borderRadius:"20px", boxShadow:"5px 5px 10px 0px rgb(246, 217, 163)" }}>
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                                    <img src={data.image} className="card-img-top" alt="..." 
                                    style={{
                                        // width: "250px",
                                        height: "220px",
                                        border: "2px solid orange",
                                        borderRadius: "10px"
                                    }}/>
                                    </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{data.title}</h5>
                                            {/* <p className="card-text">{data.discription}</p> */}
                                            <a href={data.gitlink} className="btn btn-primary">View Source Code</a>
                                        </div>
                                </div>
                            </div>
                        </>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
