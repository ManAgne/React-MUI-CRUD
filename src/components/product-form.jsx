import * as React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
} from '@mui/material';

const ProductForm = () => {
  const [title, setTitle] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [img, setImg] = React.useState([]);

  return (
    <Paper component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: 5, p: 2 }}>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Price €"
        //   fullWidth
          variant="filled"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          label="Image link"
          fullWidth
          variant="filled"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
      </Box>
      <Button variant="contained" sx={{ alignSelf: 'center', mb: 2 }}>Add a product</Button>
    </Paper>
  );
};

export default ProductForm;
