import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import AddProduct from './Pages/AddProduct/AddProduct.js';
import Product from './Pages/Product/Product';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/signUp" element={ <SignUp /> } />
          <Route path="/logIn" element={ <LogIn /> } />
          <Route path="/addProduct" element={ <AddProduct /> } />
          <Route path="/product/:id" element={ <Product  /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
