import React, {useState} from 'react';
import s from './ContactMe.module.css'

const ContactMe = () => {

    const [flag, setFlag] = useState(false);

    const onClick = (e) => {
        if (flag) {
            setFlag(false);
        } else {
            setFlag(true);
        }
    };

    return (
        <div>
        <h4 className={s.text}>Contáctame</h4>
        <div >
         <input  className={s.button} type='button' onClick={e => onClick(e)}/>
         <a className={s.icons} href='https://www.linkedin.com/in/nadia-olivera-a4832791/'><img src='https://cdn-icons-png.flaticon.com/512/3955/3955051.png' alt='LinkesIn'  width='35em' height='35em'/></a>
         <a className={s.icons} href='https://github.com/NadiaO089'><img src='https://cdn-icons-png.flaticon.com/128/1051/1051326.png' alt='GitHub'  width='35em' height='35em'/></a>
        {flag? <p className={s.text}>nadiaolivera@gmail.com</p> : null} 
        </div>
        </div>
    )
};

export default ContactMe;
