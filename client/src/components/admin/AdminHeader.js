import React from "react";
import { useNavigate } from 'react-router-dom';
// import './AdminHeader.css';

export default function AdminHeader() {
    const navigate = useNavigate()
    return (
      <div className='header-admin'>
        <div className='logo-admin'>LOGO</div>
        <div className='logout-container-admin'>
          <div className="logout-text-container-admin">
            <p onClick={()=>{navigate('/')}}>Logout</p>
          </div>
        </div>
      </div>
    )
};
