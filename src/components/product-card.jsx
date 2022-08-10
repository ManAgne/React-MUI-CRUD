import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

const ProductCard = ({
  title,
  price,
  img,
  onDelete,
}) => (
  <Card sx={{
    height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'relative',
  }}
  >
    <CardMedia
      component="img"
      width="100%"
      image={img}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', minHeight: '64px' }}>
        {title}
      </Typography>
      <Typography variant="h5" component="div" color="text.secondary" textAlign="center">
        {price}
        {' '}
        €
      </Typography>
    </CardContent>
    <IconButton
      sx={{
        position: 'absolute',
        top: 15,
        right: 15,
        color: 'error.main',
      }}
      onClick={onDelete}
    >
      <DeleteForeverTwoToneIcon sx={{ fontSize: '30px' }} />
    </IconButton>
  </Card>
);

export default ProductCard;