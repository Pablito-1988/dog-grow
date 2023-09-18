import React ,{useState}from 'react';
import emailjs from '@emailjs/browser'
import SuccessModal from '../Modal/Modal'

const ContactForm = () => {
    const service = "service_4cpysnp"
    const template = "template_xt34ltl"
    const user = "PMpHLbWXgjDfGqs2s"

    const [ onSend, setOkSend] = useState(false)
    
    function closeModal (){
      if (onSend === false){
        setOkSend(true)
      }
      else{
        setOkSend(false)
      }
      
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(service, template, e.target, user).then(
          (result) => {
            console.log(result.text);
            setOkSend(true)
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
                    <h4>NOMBRE</h4>
                  <input
                    className="nameInput"
                    type="text"
                    name="name"
                    placeholder="nombre"
                    required
                  />
                  <h4>EMAIL</h4>
                  <input
                    className="emailInput"
                    type="email"
                    name="email"
                    id=""
                    placeholder="email"
                    required
                  />
                
                <h4>MENSAJE</h4>
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
              <button onClick={()=>{closeModal()}} > mostrar modal </button>
          {onSend && <SuccessModal texto= {'El mensaje fué enviado con exito, a la brevedad nos pondremos en contacto.'} closeModal = {()=>{closeModal()}}/>}
        </div>
    );
};

export default ContactForm;