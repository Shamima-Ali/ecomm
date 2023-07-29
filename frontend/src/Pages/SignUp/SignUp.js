import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router";
import './SignUp.css';

const SignUp = () => {
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
    const newOwner = { ...form };

    const response = await fetch("http://localhost:8080/api/v1/owners", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newOwner),
   })

   if (!response.ok) {
    const errorText = await response.text();
    window.alert(`${response.status}: ${errorText}`);
  } else {

    const noErrorText = await response.text();
    console.log(noErrorText);
  }
   setForm({ email: "" });
   navigate("/");
  }


  return (
    <div className='add-form'>
      <header className='title-form'>Sign Up</header>

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
         >Sign Up</Button>
       </div>
     </form>
    </div>
  )
}

export default SignUp