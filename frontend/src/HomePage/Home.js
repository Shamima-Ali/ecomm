import React from 'react'
import Products from '../components/Products/Products.js';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <>
        <div className='top-section'>
            <header className='title'>This is an ecomm site</header>
            <Button className='login-button' 
            variant="contained"
            href="/login"
            >Sign Up/ Log In</Button>
        </div>
        <Products className='products-body'/>
    </>
  )
}

export default Home