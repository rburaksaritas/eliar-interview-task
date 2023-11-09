const pool = require('../database/index');

const getAllProducts = async () => {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
};

const getProductById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows;
};

const createProduct = async (name, description, price, image_url) => {
  const { rows } = await pool.query(
    'INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, price, image_url]
  );
  return rows[0];
};

const updateProduct = async (id, name, description, price, image_url) => {
  const { rows } = await pool.query(
    'UPDATE products SET name = $1, description = $2, price = $3, image_url = $4, updated_at = now() WHERE id = $5 RETURNING *',
    [name, description, price, image_url, id]
  );
  return rows[0];
};

const deleteProduct = async (id) => {
  await pool.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
