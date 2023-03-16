import React from 'react';

const FooterCard = ({currentHeading, measuredStat}) => {
  return (
    <div className="footer-wrapper">
        <h3 className="footer-heading">{currentHeading}</h3>
        <h2 className="footer-stat">{measuredStat}</h2>
    </div>
  );
}

export default FooterCard;
