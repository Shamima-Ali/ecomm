import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router";
import './AddProduct.css';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    image: "",
    owner: "",
  });
  const navigate = useNavigate();
 
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit (e) {
    e.preventDefault();
    const newProduct = { ...form };

    await fetch("http://localhost:8080/api/v1/products", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newProduct),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

   setForm({ name: ""});
   navigate("/");
  }

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

  async function convertToBase64(event) {
    const files = event.target.files;
    const base64String = await toBase64(files[0]);
    updateForm({ image: base64String });
  }

  return (
    <div className='add-form'>
      <header className='title-form'>Add a product</header>

      <form onSubmit={onSubmit}>

        {/* Product name */}
       <div className="form-group">
         <TextField id="outlined-basic" 
         label="Product name" 
         type="text"
         value={form.name}
         onChange={(e) => updateForm({ name: e.target.value })}
         variant="outlined" />
       </div>

      {/* Description of Product */}
      <div className="form-group">
       <TextField id="outlined-basic" 
         label="Description" 
         type="text"
         value={form.description}
         onChange={(e) => updateForm({ description: e.target.value })}
         variant="outlined" />
       </div>

      {/* Quantity of Product */}
       <div className="form-group">
       <TextField id="outlined-basic" 
         label="Quantity" 
         type="text"
         value={form.quantity}
         onChange={(e) => updateForm({ quantity: e.target.value })}
         variant="outlined" />
       </div>

       {/* Price of Product */}
       <div className="form-group">
       <TextField id="outlined-basic" 
         label="Price" 
         type="text"
         value={form.price}
         onChange={(e) => updateForm({ price: e.target.value })}
         variant="outlined" />
       </div>

       {/* Owner of Product */}
       <div className="form-group">
       <TextField id="outlined-basic" 
         label="Owner name" 
         type="text"
         value={form.owner}
         onChange={(e) => updateForm({ owner: e.target.value })}
         variant="outlined" />
       </div>

        {/* Image of Product */}
       <div className="form-group">
        <Button
            variant="outlined"
            component="label"
          >
            Upload Image
            <input
              type="file"
              hidden
              id="image-file"
              onChange={(e) => convertToBase64(e)}
            />
          </Button>
        </div>

        {/* Submittttt */}
       <div className="form-group">
         <Button 
         variant="contained"
         type="submit"
         >Add Product</Button>
       </div>
     </form>
    </div>
  )
}

export default AddProduct