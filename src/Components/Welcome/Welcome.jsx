import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import s from './Welcome.module.css'

const Welcome = () => {
    return (
        <div className={s.container}>
            <div className={s.textContainer}>
           <h4>Bienvenidos a mi Portfolio!</h4>
           <h2>Hola! Soy Ingeniero Electrónico y
            Full Stack Developer
           </h2>
           <ContactMe />
            </div>
            <div className={s.imageContainer}>
           
           <img className={s.img} src='https://media2.giphy.com/media/hpXdHPfFI5wTABdDx9/giphy.gif?cid=ecf05e47v700p2ooqax4g7c7cch5g8e4slx0hmgyagqjcolb&rid=giphy.gif&ct=g' alt='Hello World'/>
            </div>
        </div>
    )
};

export default Welcome;