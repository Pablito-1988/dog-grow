import React from 'react';
import ContactForm from './ContactForm';
import "./Contact.css";

const Contact = () => {
    return (
       <>
       <div className='contactContainer'>
            <h3>CONTACTO</h3>
            <p className='contactQuote'>Cualquier duda o consulta no dudes en ponerte en contacto con nosotros!!!</p>
            <ContactForm />
       </div>
       
       </>
    );
};

export default Contact;