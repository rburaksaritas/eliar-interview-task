// backend/controller/productController.js
const productService = require('../service/productService');

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (product.length === 0) {
      return res.status(404).send('Product not found');
    }
    res.json(product[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
