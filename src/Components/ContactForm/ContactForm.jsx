import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import s from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className={s.container}>
            <ContactMe />

            <form className={s.formContainer}>
                <p>Déjame un mensaje</p>
                <div>
                    <textarea
                    rows="1" cols='50' 
                    className={s.input}
                    type='text'
                    placeholder='Tu nombre'
                    />
                </div>

                <div>
                    <textarea
                    rows="1" cols='50'
                    className={s.input} 
                    type='text'
                    placeholder='Tu email'
                    />
                </div>

                <div>
                    <textarea
                    className={s.input} 
                    type='text'
                    placeholder='Tu mensaje'
                    rows="4" cols='50'
                    />
                </div>

                <input 
                className={s.button}
                type='button'
                value='Enviar'
                />
            </form>
        </div>

    )
};

export default ContactForm;