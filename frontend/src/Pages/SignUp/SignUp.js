import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router";
import './SignUp.css';
import { useAuthContext } from '../../hooks/useAuthContext';

const SignUp = () => {
  const { dispatch } = useAuthContext();
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

    const response = await fetch("/api/v1/owners", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newOwner),
   })
   const json = await response.text();

   if (!response.ok) {
    window.alert(`${response.status}: ${json}`);
  } else {
    localStorage.setItem('user', JSON.stringify(json));
    dispatch( {type: 'LOG_IN', payload: json})
    console.log(json);
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