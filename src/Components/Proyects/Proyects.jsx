import React from 'react';
import proyecto1 from '../../Videos/20230119_094350.mp4';
import proyecto2 from '../../Videos/20230119_110934.mp4';
import s from './Proyects.module.css'

const Proyects = () => {
    return (
        <div className={s.container}>
           <h2>Proyectos</h2>
           <div className={s.container1}>
           <div>
           <a href='https://github.com/NadiaO089/MyVideogamesApp'><video className={s.video} loop autoPlay muted>
          <source src={proyecto1} type="video/mp4" />
          </video>
         </a>
           </div>
           <div>
           <a href='https://changapp.up.railway.app/'><video className={s.video} loop autoPlay muted>
          <source src={proyecto2} type="video/mp4" />
          </video>
         </a>
           </div>
           </div>
        </div>
    )
};

export default Proyects;