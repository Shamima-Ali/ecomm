import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router";
import './LogIn.css';

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
 
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit (e) {
    e.preventDefault();
//     const newProduct = { ...form };

//     await fetch("http://localhost:8080/api/v1/products", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newProduct),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });

   setForm({ email: ""});
   navigate("/");
  }


  return (
    <div className='add-form'>
      <header className='title-form'>Log in to add a product to the website</header>

      <form onSubmit={onSubmit}>

        {/* Email */}
       <div className="form-group">
         <TextField id="outlined-basic" 
         required
         label="Email" 
         type="email"
         value={form.email}
         onChange={(e) => updateForm({ email: e.target.value })}
         variant="outlined" />
       </div>

      {/* Password */}
      <div className="form-group">
       <TextField id="outlined-basic" 
         required
         label="Password" 
         type="password"
         value={form.password}
         onChange={(e) => updateForm({ password: e.target.value })}
         variant="outlined" />
       </div>

        {/* Submittttt */}
       <div className="form-group">
         <Button 
         variant="contained"
         type="submit"
         >Log In</Button>
       </div>
     </form>
    </div>
  )
}

export default LogIn