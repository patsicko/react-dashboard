import React from 'react';
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget = () => {
  return (
    <div className='widget'>

        <div className="left">
          <div className="title">USERS</div>
          <div className="counter">21312</div>
          <div className="link">See all users</div>

        </div>
        <div className="right">
           <div className="percentage">
            20 %
           <KeyboardArrowUpIcon/>
            
           </div>
        </div>
       
    </div>
  )
}

export default Widget