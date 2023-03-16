import React from 'react';

const ImageDivision = ({planet, currentStatus}) => {
    // const {width,height} = planet.images.planet.dimensions
    // console.log(width)
    const background = {
        // width: planet.images.planet.naturalWidth,
        // backgroundImage: `url(${planet.images.planet})`
    }
    console.log()

  return (
    <div className="image-wrapper">

        {
           (currentStatus.status=="geology"&&<img className="geology-overley" src={planet.images.geology} alt=""/>)
        }        
        <img className={currentStatus.status=="structure"? "structure-overlay-image" : "overlay-transparent-image"} src={currentStatus.status=="structure"? currentStatus.image : planet.images.planet} alt=""/>
        <img className={currentStatus.status=="structure"? "structure-underlay-image" : "planet-image"} src={planet.images.planet} alt=""/>
        {/* {
           ( currentStatus.status!=="overview" && <img className={currentStatus.status=="structure"? "overlay-image" : "geology-overley"} src={planet.images.planet} alt=""/>)
        } */}
        {/* <img className={currentStatus.status=="geology"? "geology-image" : currentStatus.status=="structure"? "structure-image" : "image"} src={currentStatus.image} alt=""/> */}
    </div>
  );
}

export default ImageDivision;
