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
            <a href="https://api.whatsapp.com/send?phone=541134284190"><i className="fab fa-whatsapp"></i></a>
            <i className="fas fa-envelope"></i>
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
        <p>
          Hecho con <i id="weed" className="fas fa-cannabis"></i> por Pablito.{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
