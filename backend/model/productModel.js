const pool = require('../database/index');

const getAllProducts = async () => {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
};

const getProductById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows;
};

const createProduct = async (name, description, price) => {
  const { rows } = await pool.query(
    'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
    [name, description, price]
  );
  return rows[0];
};

const updateProduct = async (id, name, description, price) => {
  const { rows } = await pool.query(
    'UPDATE products SET name = $1, description = $2, price = $3, updated_at = now() WHERE id = $4 RETURNING *',
    [name, description, price, id]
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
