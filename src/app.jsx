import * as React from 'react';
import { Box, Grid } from '@mui/material';
import ProductService from 'services/product-service';
import { ProductCard, ProductForm } from 'components';

const App = () => {
  const [products, setProducts] = React.useState([]);

  const fetchAllProducts = async () => {
    const fetchedProducts = await ProductService.fetchAll();
    setProducts(fetchedProducts);
  };

  const createProduct = async (productProps) => {
    await ProductService.create(productProps);
    await fetchAllProducts();
  };

  const deleteProduct = async (id) => {
    const itemDeleted = await ProductService.remove(id);
    if (itemDeleted) {
      const fetchedProducts = await ProductService.fetchAll();
      setProducts(fetchedProducts);
    }
  };

  React.useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Box>
      <Box>
        <ProductForm onSubmit={createProduct} />
      </Box>
      <Grid container spacing={3} sx={{ p: 5 }}>
        {products.map(({
          id,
          title,
          price,
          img,
        }) => (
          <Grid key={id} item xs={6} md={4} lg={3} sx={{ gridAutoRows: 'max-content' }}>
            <ProductCard
              id={id}
              title={title}
              price={price}
              img={img}
              onDelete={() => deleteProduct(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
