import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import TypographyLimited from './typography-limited';

const ProductCard = ({
  title,
  description,
  category,
  price,
  img,
  onDelete,
  onEdit,
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
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ textAlign: 'center', minHeight: '64px' }}
      >
        {title}
      </Typography>
      <TypographyLimited
        variant="body2"
        color="text.secondary"
      >
        {description}
      </TypographyLimited>
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
        }}
      >
        {category}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="text.secondary"
        textAlign="center"
      >
        {`${price} €`}
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
    <IconButton
      sx={{
        position: 'absolute',
        top: 15,
        left: 15,
        color: 'primary.main',
      }}
      onClick={onEdit}
    >
      <EditTwoToneIcon sx={{ fontSize: '30px' }} />
    </IconButton>

  </Card>
);

export default ProductCard;
