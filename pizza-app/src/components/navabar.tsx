import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  
  return (
    <div className='header'>
      <div className='header-left'>
        <img
          className='image'
          src='https://1000logos.net/wp-content/uploads/2023/04/Dominos-logo-768x432.png'
          alt='Logo'
        />
      </div>

      <div className='header-right'>
        <h3 className='header-text'>Select location</h3>
        <h3 className='header-text'>Select location according to your place</h3>
      </div>

      <div className='headerRight'>
        <Button sx={{ color: 'white', ':hover': 'pointer' }} onClick={() => navigate("/login")} >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
