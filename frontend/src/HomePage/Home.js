import React from 'react'
import Products from '../components/Products/Products.js';
import { Button } from '@mui/material';
import './Home.css'

const Home = () => {
  return (
    <>
        <div className='top-section'>
            <header className='title'>This is an ecomm site</header>
            <Button className='addproduct-button' 
            variant="contained"
            href="/addProduct"
            >Add Product</Button>
        </div>
        <Products className='products-body'/>
    </>
  )
}

export default Home