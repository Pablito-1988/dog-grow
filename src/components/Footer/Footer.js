import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="shipContainer">
          <i className="fas fa-truck"></i>
          <p className="shipText">¡ENVIOS A TODO EL PAIS!</p>
        </div>
        <div className="contact">
          <p>CONTACTO</p>
          <div className="contactLinks">
            <a
              href="https://wa.me/5491165480864"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="mailto:dog.growshop@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="socialMedia">
          <p>REDES SOCIALES</p>
          <div className="socialLinks">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </footer>
      <div className="copy">
        <p className="copyText">
          Hecho con <i id="weed" className="fas fa-cannabis"></i> por Pablito
        </p>
      </div>
    </>
  );
};

export default Footer;
