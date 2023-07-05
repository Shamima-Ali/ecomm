import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './Items.css'
import { Grid } from '@mui/material';

const Items = () => {
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
    <Grid container spacing={1} className='items'>
        <Grid  md={4}>
        <ItemCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ItemCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ItemCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ItemCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ItemCard {...dummyItem}/>
        </Grid>
        <Grid  md={4}>
        <ItemCard {...dummyItem}/>
        </Grid>
    </Grid>
  )
}

export default Items