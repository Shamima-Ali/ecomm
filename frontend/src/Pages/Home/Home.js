import {React, useState} from 'react'
import Products from '../../components/Products/Products.js';
import { Button } from '@mui/material';
import './Home.css'
import { GoogleLogin } from '@react-oauth/google';

const Home = () => {
  const [owner, setOwner] = useState([]);

  async function responseMessage (response) {

    await fetch("http://localhost:8080/api/v1/owners", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(response),
   }).then((response) => {
    return response.json();
    })
    .then((owner) => {
        setOwner(owner);
        window.localStorage.setItem("isLoggedIn", true);
    })
   .catch(error => {
     window.alert(error);
     return;
   });
  };

console.log(owner);

  const errorMessage = (error) => {
      console.log(error);
  };

  return (
    <>
      <div className='top-section'>
          <header className='title'>This is an ecomm site</header>
          { !window.localStorage.getItem("isLoggedIn") && 
          <GoogleLogin className='addproduct-button' 
          onSuccess={responseMessage} onError={errorMessage} />
          }

          { window.localStorage.getItem("isLoggedIn") && 
          <>
          <Button className='addproduct-button' 
          variant="contained"
          href="/addProduct">Add Product</Button> 

          <Button className='addproduct-button' 
          variant="contained"
          onClick={() => {
            window.localStorage.removeItem("isLoggedIn"); 
            window.location.reload(false);
          }}>Sign Out</Button>
          </>
          }
      </div>
      
      <Products className='products-body'/>
    </>
  )
}

export default Home