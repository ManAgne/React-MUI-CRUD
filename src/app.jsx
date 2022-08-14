import * as React from 'react';
import { Box, Grid, Modal } from '@mui/material';
import ProductService from 'services/product-service';
import { ProductCard, ProductForm } from 'components';

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [productInEdit, setProductInEdit] = React.useState(null);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const fetchAllProducts = async () => {
    const fetchedProducts = await ProductService.fetchAll();
    setProducts(fetchedProducts);
  };

  const createProduct = async (productProps) => {
    await ProductService.create(productProps);
    await fetchAllProducts();
  };

  const editProduct = (id) => {
    const foundProduct = products.find((x) => x.id === id);
    setProductInEdit(foundProduct);

    handleModalOpen();
  };

  const updateProduct = async (productProps) => {
    await ProductService.update(productInEdit.id, productProps);
    await fetchAllProducts();

    handleModalClose();
  };

  const removeProduct = async (id) => {
    const itemRemoved = await ProductService.remove(id);
    if (itemRemoved) {
      const fetchedProducts = await ProductService.fetchAll();
      setProducts(fetchedProducts);
    }
  };

  React.useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Box>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <ProductForm
          onSubmit={updateProduct}
          submitText="Save and exit"
          initValues={productInEdit}
        />
      </Modal>

      <Box>
        <ProductForm
          onSubmit={createProduct}
          submitText="Add new Product"
        />
      </Box>
      <Grid container spacing={3} sx={{ p: 5 }}>
        {products.map(({
          id,
          title,
          price,
          img,
        }) => (
          <Grid key={id} item xs={6} md={4} lg={2.4} sx={{ gridAutoRows: 'max-content' }}>
            <ProductCard
              id={id}
              title={title}
              price={price}
              img={img}
              onDelete={() => removeProduct(id)}
              onEdit={() => editProduct(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
