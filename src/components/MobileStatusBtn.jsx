import React from 'react';

const MobileStatusBtn = ({statusBtn, btnText, bgColor, setBtnStatus, active}) => {
  return (
    <div>
        <div className="status-btn-wrapper" >
            <button className="status-btn" value={statusBtn} onClick={(e) =>setBtnStatus(e.target.value)} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} style={btnStyle}>
                {btnText}
            </button>
        </div>
    </div>
  );
}

export default MobileStatusBtn;
