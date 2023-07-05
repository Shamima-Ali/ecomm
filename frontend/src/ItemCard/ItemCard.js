import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dummyPic from '../assets/dummy.jpeg'
import './ItemCard.css';

const ItemCard = (item) => {
    const test = item.picLocaton;
    console.log(test);

  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
    <CardMedia
      sx={{ height: 100 }}   
      component='img' 
      src={dummyPic}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
    </CardContent>
    <CardActions className='buttoncard'>
      <Button href="https://instagram.com/shammi_ali?igshid=MmIzYWVlNDQ5Yg==">Contact for purchase</Button>
    </CardActions>
  </Card>
  )
}

export default ItemCard