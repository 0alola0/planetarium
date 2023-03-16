import React from 'react';
import {useState} from 'react';

const NavigationBtn = ({name, color}) => {
    const [isHover, setIsHover] = useState(false)
    const handleHoverOn = () => {setIsHover(true)}
    const handleHoverOff = () => {setIsHover(false)}

  const overline = {
    borderColor: isHover? color : "transparent"
  }
  const fill = {
    backgroundColor: color
  }

  return (
    <div className="nav-btn-container" style={overline} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <div className="nav-ball" style={fill}></div>
        <button className="navigation-btn">{name}</button>
    </div>
  );
}

export default NavigationBtn;
