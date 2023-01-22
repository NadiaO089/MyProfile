import React from 'react';

const Skills = () => {
    return (
        <div>
          <h4>Tech Skills</h4>
          <div>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' alt='javascript'/>
              <p>Javascript</p>
            </div>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/1126/1126012.png' alt='react'/>
              <p>React</p>
            </div>
            <div>
              <img src='https://cdn.iconscout.com/icon/free/png-256/redux-283024.png' alt='redux'/>
              <p>Redux</p>
            </div>
            <div>
              <img src='data:image/png;base64,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' alt='node'/>
              <p>Node</p>
            </div>
            <div>
              <img src='https://www.atatus.com/images/devicon/icon-express.svg' alt='express'/>
              <p>Express</p>
            </div>
            <div>
              <img src='https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png' alt='postgresql'/>
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png' alt='css'/>
              <p>CSS</p>
            </div>
            <div>
              <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='git'/>
              <p>Git</p>
            </div>
          </div>
          <h4>Soft Skills</h4>
          <div>
            <p>Metodologías Ágiles</p>
            <p>Comunicación</p>
            <p>Trabajo en Equipo</p>
            <p>Orientación a Resultados</p>
            <p>Automotivación</p>
          </div>
          <div>

          </div>
        </div>
    )
};

export default Skills;