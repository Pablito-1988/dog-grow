import React from "react";

const SellPoint = (props) => {
  const data = props.info;
  if (!data) {
    return (
      <>
        <p>Cargando ...</p>
      </>
    );
  } else {
    return (
      <div className="sellPointContainer">
        <h2 className="sellPointName">{data.shopName}</h2>
        <a
          href={data.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img className="locationMap" src={data.map.url} alt="" />
        </a>
        <div className="sellPointData">
          <p className="sellPointAdress">{data.adress}</p>
         <p className="sellPointPhone">Tel: {data.phone}</p> 
         
          <div className="sellPointSocial">
            <a href={`mailto: ${data.email} `}>
              <i id="sellPointsIcons" className="far fa-envelope"></i>
            </a>
            <a href={`${data.web}`}>
              <i id="sellPointsIcons" className="fas fa-globe"></i>
            </a>
            <a href={`${data.instagram}`}>
              <i id="sellPointsIcons" className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default SellPoint;
