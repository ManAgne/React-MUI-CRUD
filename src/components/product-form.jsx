import * as React from 'react';
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';
import ProductService from 'services/product-service';

const ProductForm = ({
  onSubmit,
  submitText,
  initValues,
  flexDirectionValue,
  widthValue,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [title, setTitle] = React.useState(initValues?.title);
  const [description, setDescription] = React.useState(initValues?.description);
  const [category, setCategory] = React.useState(initValues?.categoryId);
  const [type, setType] = React.useState(initValues?.typeId);
  const [price, setPrice] = React.useState(initValues?.price);
  const [img, setImg] = React.useState(initValues?.img);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title,
      description,
      categoryId: category,
      typeId: type,
      price: Number(price),
      img,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await ProductService.fetchCategories();
      setCategories(fethedCategories);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const fethedTypes = await ProductService.fetchTypes();
      setTypes(fethedTypes);
    })();
  }, []);

  return (
    <Paper component="form" sx={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <Box sx={{
        display: 'flex',
        flexDirection: flexDirectionValue,
        width: widthValue,
        gap: 5,
        p: 2,
      }}
      >
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          variant="filled"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          label="Category"
          fullWidth
          select
          variant="filled"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map(({ id, title: categoryTitle }) => (
            <MenuItem key={id} value={id}>{categoryTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Type"
          fullWidth
          select
          variant="filled"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          {types.map(({ id, title: typeTitle }) => (
            <MenuItem key={id} value={id}>{typeTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Price €"
          fullWidth
          variant="filled"
          type="number"
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
      <Button type="submit" variant="contained" sx={{ alignSelf: 'center', mb: 2 }}>{submitText}</Button>
    </Paper>
  );
};

export default ProductForm;
