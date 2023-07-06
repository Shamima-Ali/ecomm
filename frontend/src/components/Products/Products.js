import React from 'react'
import ProductCard from '../ProductCard/ProductCard.js'
import './Products.css'
import { Grid } from '@mui/material';

const Products = () => {
    const dummyItem = {
        picLocaton:'./assets/dummy.jpeg',
        name: 'Dummy Item',
        description: 'This is a dummy item because it is a dummy',
    }

  return (
    // <div className='items'>
    //     <Grid
    //     <ItemCard {...dummyItem}/>
    //     <ItemCard {...dummyItem}/>
    //     <ItemCard {...dummyItem}/>
    //     <ItemCard {...dummyItem}/>
        
    // </div>
    <Grid container spacing={1} className='products'>
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
        </Grid>
        <Grid  md={4}>
        <ProductCard {...dummyItem}/>
        </Grid>
    </Grid>
  )
}

export default Products