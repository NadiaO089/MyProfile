import React from 'react';
import proyecto1 from '../../Videos/20230119_094350.mp4';
import proyecto2 from '../../Videos/20230119_110934.mp4'

const Proyects = () => {
    return (
        <div>
           <h2>Proyectos</h2>
           <div>
           <a href='https://github.com/NadiaO089/MyVideogamesApp'><video loop autoPlay muted>
          <source src={proyecto1} type="video/mp4" />
          </video>
         </a>
           </div>
           <div>
           <a href='https://changapp.up.railway.app/'><video loop autoPlay muted>
          <source src={proyecto2} type="video/mp4" />
          </video>
         </a>
           </div>
        </div>
    )
};

export default Proyects;