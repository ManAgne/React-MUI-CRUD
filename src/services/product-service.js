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
  const response = await fetch(`${serverAddress}/products`);
  const products = await response.json();

  return products.map(formatProduct);
};

const create = async (productProps) => {
  await fetch('http://localhost:8000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productProps),
  });
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
