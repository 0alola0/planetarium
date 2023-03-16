import React from 'react';

const ImageDivision = ({planet, currentStatus}) => {


  return (
    <div className="image-wrapper">
        {
           ( currentStatus.status!=="overview" && <img className={currentStatus.status=="structure"? "overlay-image" : "geology-overley"} src={planet.images.planet} alt=""/>)
        }
        <img className={currentStatus.status=="geology"? "geology-image" : currentStatus.status=="structure"? "structure-image" : "image"} src={currentStatus.image} alt=""/>
    </div>
  );
}

export default ImageDivision;
