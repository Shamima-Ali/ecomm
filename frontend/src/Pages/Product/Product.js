import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './Product.css';

const Product = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getAPI = () => {
            const API = `http://localhost:8080/api/v1/products/${id}`;

            fetch(API)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                });
        };
        getAPI();
    }, [id]);

  return (
    <div className='product-page'>
        <header className='title-page'>Product Details</header>

        <div className='product-details'>
            <img src={data.image} className='product-img'></img>
            <Typography variant="h6" className='product-info'>
                <b>Product Name:</b> {data.name}
            </Typography>
            <Typography variant="h6" className='product-info'>
                <b>Product Description:</b> {data.description}
            </Typography>
            <Typography variant="h6" className='product-info'>
                <b>Product Price:</b> {data.price}
            </Typography>
            <Typography variant="h6" className='product-info'>
                <b>Product Quantity:</b> {data.quantity}
            </Typography>
            <Typography variant="h6" className='product-info'>
                Product Owned By {data.owner}
            </Typography>
        </div>

    </div>
  )
}

export default Product