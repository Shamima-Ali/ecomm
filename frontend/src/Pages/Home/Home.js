import {React, useState} from 'react'
import Products from '../../components/Products/Products.js';
import { Button, colors } from '@mui/material';
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
        (owner.length > 0) ? window.localStorage.setItem("isLoggedIn", true) : window.alert("You are not the admin");
    })
   .catch(error => {
     window.alert(error);
     return;
   });
  };

// console.log(owner);

  const errorMessage = (error) => {
      console.log(error);
  };

  return (
    <>
      <div className='top-section'>
          <header className='title'>Another Ecomm Site</header>
          { !window.localStorage.getItem("isLoggedIn") && 
          // <GoogleLogin className='addproduct-button' 
          // onSuccess={responseMessage} onError={errorMessage} />
          <Button className='addproduct-button' 
          variant="contained"
          href="/signUp"
          sx={{
            backgroundColor: '#887BB0',
          }}
          >Log In To Add A Product</Button> 
          }

          {window.localStorage.getItem("isLoggedIn") && 
          <>
          <Button className='addproduct-button' 
          variant="contained"
          href="/addProduct"
          sx={{
            backgroundColor: '#887BB0',
          }}
          >Add Product</Button> 

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