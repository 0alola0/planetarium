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

  return (
    <div className="status-btn-wrapper" >
        <button value={statusBtn} onClick={(e) =>setBtnStatus(e.target.value)} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} style={btnStyle}>
            {number} {btnText}
        </button>
    </div>
  );
}

export default StatusBtns;
