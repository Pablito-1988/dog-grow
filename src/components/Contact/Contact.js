import React from 'react';
import ContactForm from './ContactForm';
import "./Contact.css";

const Contact = () => {
    return (
       <>
       <div className='contactContainer'>
            <h2>CONTACTO</h2>
            <p className='contactQuote'>Cualquier duda o consulta no dudes en ponerte en contacto no nosotros!!!</p>
            <ContactForm />
       </div>
       <p>Hola soy Contact</p>
       </>
    );
};

export default Contact;