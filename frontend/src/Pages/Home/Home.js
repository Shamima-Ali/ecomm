import {React, useState} from 'react'
import Products from '../../components/Products/Products.js';
import { Button, colors } from '@mui/material';
import './Home.css'
import { GoogleLogin } from '@react-oauth/google';
import { useAuthContext } from '../../hooks/useAuthContext.js';

const Home = () => {
  const [owner, setOwner] = useState([]);
  const { dispatch } = useAuthContext();

  // async function responseMessage (response) {
  //   await fetch("http://localhost:8080/api/v1/owners", {
  //    method: "POST",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(response),
  //  }).then((response) => {
  //   return response.json();
  //   })
  //   .then((owner) => {
  //       setOwner(owner);
  //       (owner.length > 0) ? window.localStorage.setItem("isLoggedIn", true) : window.alert("You are not the admin");
  //   })
  //  .catch(error => {
  //    window.alert(error);
  //    return;
  //  });
  // };

// console.log(owner);

  const errorMessage = (error) => {
      console.log(error);
  };

  return (
    <>
      <div className='top-section'>
          <header className='title'>Another Ecomm Site</header>
          { !window.localStorage.getItem("user") && 
          // <GoogleLogin className='addproduct-button' 
          // onSuccess={responseMessage} onError={errorMessage} />
          <div className='user-buttons'>
          <Button className='signUp-button' 
          variant="contained"
          href="/signUp"
          sx={{
            backgroundColor: '#887BB0',
          }}
          >Sign Up</Button> 
          <Button className='logIn-button' 
          variant="contained"
          href="/logIn"
          sx={{
            backgroundColor: '#887BB0',
            marginLeft: '5px',
          }}
          >Log In</Button> 
          </div>
          }

          {window.localStorage.getItem("user") && 
          <div className='userHidden-button'>
          <Button className='addproduct-button' 
          variant="contained"
          href="/addProduct"
          sx={{
            backgroundColor: '#887BB0',
          }}
          >Add Product</Button> 

          <Button className='signOUT-button' 
          variant="contained"
          sx={{
            marginLeft: '5px',
          }}
          onClick={() => {
            window.localStorage.removeItem("user"); 
            window.location.reload(false);
            dispatch({ type: 'LOG_OUT'})
          }}>Sign Out</Button>
          </div>
          }
      </div>

      <Products className='products-body'/>
    </>
  )
}

export default Home