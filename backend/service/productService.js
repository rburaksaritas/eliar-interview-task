// backend/service/productService.js
const productModel = require('../model/productModel');

const getAllProducts = async () => {
  return productModel.getAllProducts();
};

const getProduct = async (id) => {
  return productModel.getProductById(id);
};

const createProduct = async (productData) => {
  return productModel.createProduct(productData.name, productData.description, productData.price);
};

const updateProduct = async (id, productData) => {
  return productModel.updateProduct(id, productData.name, productData.description, productData.price);
};

const deleteProduct = async (id) => {
  return productModel.deleteProduct(id);
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
