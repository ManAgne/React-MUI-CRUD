const serverAddress = 'http://localhost:8000';

const formatProduct = ({
  id,
  title,
  description,
  price,
  img,
  categoryId,
  category,
  typeID,
  type,
}) => ({
  id,
  title,
  description,
  price,
  img,
  categoryId,
  category: category.title,
  typeID,
  type: type.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/products?_expand=category&_expand=type`);
  const products = await response.json();

  return products.map(formatProduct);
};

const create = async (productProps) => {
  const response = await fetch(`${serverAddress}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productProps),
  });

  const product = await response.json();

  return product;
};

const update = async (id, productProps) => {
  const response = await fetch(`${serverAddress}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productProps),
  });

  const product = await response.json();

  return product;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/products/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCategories = async () => {
  const response = await fetch(`${serverAddress}/categories`);
  const categories = await response.json();

  return categories;
};

const fetchTypes = async () => {
  const response = await fetch(`${serverAddress}/types`);
  const types = await response.json();

  return types;
};

const ProductService = {
  fetchAll,
  create,
  update,
  remove,
  fetchCategories,
  fetchTypes,
};

export default ProductService;
