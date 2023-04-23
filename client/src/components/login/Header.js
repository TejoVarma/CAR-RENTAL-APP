import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AdminHeader() {
    const navigate = useNavigate()
    return (
      <div className='header-admin'>
        <div className='logo-admin'>
          <img className="logo-admin-pic" src="/logo.jpeg" alt="logo" onClick={()=>navigate('/')}/>
          <p className="company-admin" onClick={()=>navigate('/')}>Miles : Car Rental</p>
        </div>
      </div>
    )
};