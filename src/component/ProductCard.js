import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const ProductCard = ({items}) => {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${items.id}`);
  }
  return (
    <Card className='ma-bt' sx={{ maxWidth: 345 }} onClick={showDetail}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="auto"
        image={items?.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items?.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {items?.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {items?.choice === true?"concious choice":""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {items?.new === true?"신제품":"상품"}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ProductCard