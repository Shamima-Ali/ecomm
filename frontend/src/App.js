import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home.js';
import AddProduct from './AddProduct/AddProduct.js';

function App() {
  return (
    <>
      {/* <div className='top-section'>
        <header className='title'>This is an ecomm site</header>
        <Button className='login-button' variant="contained">Sign Up/ Log In</Button>
      </div>
      
      <Items className='products-body'/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/addProduct" element={ <AddProduct /> } />
        </Routes>
      </BrowserRouter>
      {/* <h1>hi</h1> */}
    </>
  );
}

export default App;
