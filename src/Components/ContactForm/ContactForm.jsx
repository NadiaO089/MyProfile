import React from 'react';
import ContactMe from '../ContactMe/ContactMe'

const ContactForm = () => {
    return (
        <div>
            <ContactMe />

            <form>
                <div>
                    <input 
                    type='text'
                    placeholder='Tu nombre'
                    />
                </div>

                <div>
                    <input 
                    type='text'
                    placeholder='Tu email'
                    />
                </div>

                <div>
                    <input 
                    type='text'
                    placeholder='Tu mensaje'
                    />
                </div>

                <input 
                type='button'
                value='Enviar'
                />
            </form>
        </div>

    )
};

export default ContactForm;