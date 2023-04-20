import React from "react";
import { useNavigate } from 'react-router-dom';
// import './AdminHeader.css';

export default function AdminHeader() {
    const navigate = useNavigate()
    return (
      <div className='header'>
        <div className='logo'>LOGO</div>
        <div className='logout' onClick={()=>{navigate('/')}}>Logout</div>
      </div>
    )
};
