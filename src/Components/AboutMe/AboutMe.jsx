import React from 'react';
import photo from '../../images/MyProfileImage.jpeg';
import s from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={s.container}>
           <h2>Sobre mí</h2>
           <div className={s.container1}>
            <img className={s.img} src={photo} alt='profile' width='200px' heigth='200px'/>
            <div className={s.textContainer}>
            <p>Soy ingeniera electrónica de profesión, en búsqueda de mejores oportunidades laborales convirtiéndome en Full Stack Developer. 
Me gusta trabajar duro para cumplir los objetivos planteados. Soy una persona dedicada, perfeccionista, que disfruta trabajar en equipo.
Busco nuevos desafíos, desarrollar mis habilidades y mantenerme en constante aprendizaje.</p>
</div>
</div>
        </div>
    )
};

export default AboutMe;