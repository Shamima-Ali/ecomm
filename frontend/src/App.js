import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import AddProduct from './Pages/AddProduct/AddProduct.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/addProduct" element={ <AddProduct /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
