import React from 'react';
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({ type }) => {

let data;
//temporary

const amount=100;
const diff=20;

switch(type){

  case "user":

   data={
    title:"USERS",
    isMoney:false,
    link:"See all users",
    icon: <PersonOutlineOutlinedIcon className='icon'
    style={
      {
        backgroundColor:"rgba(255,0,0,0.2)",
        color:"crimson",
      }
    }
    
    />
   };

   break;

   case "order":

   data={
    title:"ORDERS",
    isMoney:false,
    link:"See all orders",
    icon: <ShoppingCartCheckoutOutlinedIcon className='icon'
    
    style={
      {
        backgroundColor:"rgba(218,165,32,0.2)",
        color:"goldenrod",
      }
    }
    />
   };

   break;

   case "earning":

   data={
    title:"EARNINGS",
    isMoney:true,
    link:"View net earnings",
    icon: <MonetizationOnOutlinedIcon className='icon'
    
    style={
      {
        backgroundColor:"rgba(0,128,0,0.2)",
        color:"green",
      }
    }
    />
   };

   break;

   case "balance":

   data={
    title:"BALANCE",
    isMoney:true,
    link:"See details",
    icon: <AccountBalanceWalletOutlinedIcon className='icon' 
    
    style={
      {
        backgroundColor:"rgba(128,0,128,0.2)",
        color:"purple",
      }
    }
    />
   };

   break;

   default:
    break;

}









  return (
    <div className='widget'>

        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"} {amount}</div>
          <div className="link">{data.link}</div>

        </div>
        <div className="right">
           <div className="percentage positive ">
            {diff} %
           <KeyboardArrowUpIcon/>
            
           </div>
          {data.icon}
        </div>
       
    </div>
  )
}

export default Widget