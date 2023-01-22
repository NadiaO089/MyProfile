import React from 'react';
import photo from '../../images/MyProfileImage.jpeg';

const AboutMe = () => {
    return (
        <div>
           <h2>Sobre mí</h2>
           <div>
            <img src={photo} alt='profile photo' width='200px' heigth='200px'/>
            <p>Soy ingeniera electrónica de profesión, en búsqueda de mejores oportunidades laborales convirtiéndome en Full Stack Developer. 
Me gusta trabajar duro para cumplir los objetivos planteados. Soy una persona dedicada, perfeccionista, que disfruta trabajar en equipo.
Busco nuevos desafíos, desarrollar mis habilidades y mantenerme en constante aprendizaje.</p>
           </div>
        </div>
    )
};

export default AboutMe;