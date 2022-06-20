import React from 'react';
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const service = "service_4cpysnp"
    const template = "template_xt34ltl"
    const user = "PMpHLbWXgjDfGqs2s"

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(service, template, e.target, user).then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
        
      }
    return (
        <div className='formContainer'>
            <form className="form" onSubmit={sendEmail}>
                <div className="nameAndEmailContainer">
                    <h3>NOMBRE</h3>
                  <input
                    className="nameInput"
                    type="text"
                    name="name"
                    placeholder="nombre"
                    required
                  />
                  <h3>EMAIL</h3>
                  <input
                    className="emailInput"
                    type="email"
                    name="email"
                    id=""
                    placeholder="email"
                    required
                  />
                
                <h3>MENSAJE</h3>
                <textarea
                  id=""
                  cols="30"
                  name="text"
                  rows="10"
                  placeholder="Dejá un mensaje copado :)"
                  required
                ></textarea>
                </div>
                <div className="submitButton">
                  <button className="contactButton" type="submit">
                  ENVIAR
                  </button>
                </div>
              </form>
            
        </div>
    );
};

export default ContactForm;