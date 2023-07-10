import { React, useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard.js'
import './Products.css'
import { Grid } from '@mui/material';

const Products = () => {
    const dummyItem = {
        picLocaton:'./assets/dummy.jpeg',
        name: 'Dummy Item',
        description: 'This is a dummy item because it is a dummy',
    }
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const getAPI = () => {
          const API = 'http://localhost:8080/api/v1/products';

          fetch(API)
              .then((response) => {
                  return response.json();
              })
              .then((fetchedProducts) => {
                  setProducts(fetchedProducts);
              });
      };
      getAPI();
  }, []);

      // console.log(products[0]);
      // products.map((p) => console.log(p));

  return (
    <Grid container spacing={1} className='products'>
      {      
        products.map((product) => {
          // console.log(product);
          return(
          <Grid  md={4}>
            <ProductCard {...product}/>
          </Grid>
          )
      })}
       {/* <ProductCard {...products[0]}/> */}
        {/* <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid> */}
    </Grid>
  )
}

export default Products