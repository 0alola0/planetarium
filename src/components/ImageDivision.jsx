import React from 'react';


const ImageDivision = ({planet, currentStatus}) => {

  return (
    <div className="image-wrapper animated fadeInLeft">
        {
           (currentStatus.status=="geology"&&<img className="geology-overley animated fadeInLeftGeo" src={planet.images.geology} alt=""/>)
        }        
        <img className={currentStatus.status=="structure"? "structure-overlay-image" : "overlay-transparent-image"} src={currentStatus.status=="structure"? currentStatus.image : planet.images.planet} alt=""/>
        <img className={currentStatus.status=="structure"? "structure-underlay-image" : "planet-image"} src={planet.images.planet} alt=""/>
    </div>
  );
}

export default ImageDivision;
