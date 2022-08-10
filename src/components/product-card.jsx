import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CartContext from '../../../contexts/cart-context';

const ProductCard = ({
  id,
  title,
  price,
  img,
  liked,
  updateProduct,
}) => {
  const { addToCart } = React.useContext(CartContext);

  return (
    <Card sx={{
      height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'relative',
    }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 16, right: 16 }}
        onClick={() => updateProduct({ id, liked: !liked })}
      >
        {liked ? <FavoriteRoundedIcon color="primary" /> : <FavoriteBorderRoundedIcon color="primary" />}
      </IconButton>
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
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">More</Button>
        <Button size="small" onClick={() => addToCart(id)}>Add to card</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
