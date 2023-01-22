import React from 'react';
import ContactMe from '../ContactMe/ContactMe';

const Welcome = () => {
    return (
        <div>
           <h5>Bienvenidos a mi Portfolio!</h5>
           <h2>Hola! Soy Ingeniero Electrónico y
            Full Stack Developer
           </h2>
                <ContactMe />
           <img src='https://media2.giphy.com/media/hpXdHPfFI5wTABdDx9/giphy.gif?cid=ecf05e47v700p2ooqax4g7c7cch5g8e4slx0hmgyagqjcolb&rid=giphy.gif&ct=g' alt='Hello World'/>
        </div>
    )
};

export default Welcome;