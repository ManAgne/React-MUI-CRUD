const serverAddress = 'http://localhost:8000';

const formatProduct = ({
  id,
  title,
  description,
  price,
  img,
}) => ({
  id,
  title,
  description,
  price,
  img,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/products?_expand=category`);
  const products = await response.json();

  return products.map(formatProduct);
};

const remove = async (id) => {
  await fetch(`http://localhost:8000/products/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const ProductService = {
  fetchAll,
  remove,
};

export default ProductService;
