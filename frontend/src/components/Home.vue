<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Make sure axios is installed with npm install axios
  
  export default {
    name: 'home-page',
    data() {
      return {
        products: []
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('/api/products');
          this.products = response.data;
        } catch (error) {
          console.error(error);
          // Handle error here, e.g., user feedback or a retry mechanism.
        }
      }
    }
  };
  </script>
  