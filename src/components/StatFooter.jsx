import React from 'react';
import FooterCard from './FooterCard';

const StatFooter = ({planet}) => {
  return (
    <div>
        <FooterCard currentHeading={"ROTATION TIME"} measuredStat={planet.rotation}/>
        <FooterCard currentHeading={"REVOLUTION TIME"} measuredStat={planet.revolution}/>
        <FooterCard currentHeading={"RADIUS"} measuredStat={planet.radius}/>
        <FooterCard currentHeading={"AVERAGE TEMP."} measuredStat={planet.temperature}/>
    </div>
  );
}

export default StatFooter;
