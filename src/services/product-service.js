const serverAddress = 'http://localhost:8000';

const formatProduct = ({
  id,
  title,
  price,
  img,
}) => ({
  id,
  title,
  price,
  img,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/products`);
  const products = await response.json();

  return products.map(formatProduct);
};

const create = async (productProps) => {
  const response = await fetch('http://localhost:8000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productProps),
  });

  const product = await response.json();

  return product;
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
  create,
};

export default ProductService;
