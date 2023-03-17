import React, { useState } from 'react';

const StatusBtns = ({number, statusBtn, btnText, bgColor, setBtnStatus, active}) => {
    const [isHover, setIsHover] = useState(false)
    const handleHoverOn = () => {
        setIsHover(true)
    }
    const handleHoverOff = () => {
        setIsHover(false)
    }
    const btnStyle = {
        backgroundColor: isHover||active? bgColor : "transparent"
    }
    const fill = {
        borderColor: active? bgColor : "transparent"
    }

  return (
    <div className="status-btn-wrapper" style={fill}>
        <button className="status-btn" value={statusBtn} onClick={(e) =>setBtnStatus(e.target.value)} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} style={btnStyle}>
            <span className="button-numerator-text">{number}</span> {btnText}
        </button>
    </div>
  );
}

export default StatusBtns;
