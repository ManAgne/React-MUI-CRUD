import { Box, Grid } from '@mui/material';
import ProductCard from 'components/product-card';
import ProductService from 'services/product-service';
import * as React from 'react';

const App = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ProductService.fetchAll();
      setProducts(fetchedProducts);
    })();
  }, []);

  const deleteItem = async (id) => {
    const itemDeleted = await ProductService.remove(id);
    if (itemDeleted) {
      const fetchedProducts = await ProductService.fetchAll();
      setProducts(fetchedProducts);
    }
  };

  return (
    <Box sx={{ display: 'flex', py: 3 }}>
      <Grid container spacing={3} sx={{ px: 5 }}>
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
              onDelete={() => deleteItem(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
