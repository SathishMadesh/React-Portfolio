import React from 'react';
import skills from './data/skills.json';

function Skills() {
  return (
    <>
      <div className="skills-container">
        <h1>Skills</h1>
        {skills.map((data)=>(
            <>
            <div className="items" key={data.key} >
                <div className="item" >
                    <img src={data.image} alt={data.title} />
                    <h3>{data.title}</h3>
                </div>
            </div>
            </>
        ))}
      </div>
    </>
  )
}

export default Skills
