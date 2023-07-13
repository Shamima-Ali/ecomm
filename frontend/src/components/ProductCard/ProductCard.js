import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dummyPic from '../../assets/dummy.jpeg'
import './ProductCard.css';
import { useNavigate } from "react-router";

const ProductCard = (item) => {
  const navigate = useNavigate();
  const itemId = item._id;

  return (
    <Card sx={{ maxWidth: 345 }} className='card' onClick={() => navigate(`/product/${itemId}`)}>
      <CardActionArea>
     <CardMedia
       sx={{ height: 100 }}   
       component='img' 
       src={item.image}
     />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Product Description: {item.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Product Quantity: {item.quantity}
      </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions>

    </CardActionArea>
  </Card>
  )
}

export default ProductCard