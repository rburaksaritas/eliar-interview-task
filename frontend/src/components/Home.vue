<template>
  <div class="wrapper">
    <header class="header">
      <img src="https://www.eliar.com/wp-content/uploads/2021/03/Eliar-Elektronik_Logo.svg" alt="Company Logo"
        class="logo" />
    </header>
    <div class="product-list-container">
      <h1>Product List</h1>
      <div class="product-grid">
        <router-link class="product-card" v-for="product in products" :key="product.id"
          :to="{ name: 'ProductDetail', params: { id: product.id } }" tag="div">
          <img :src="product.image_url" :alt="product.name" class="product-image" />
          <div class="product-info">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <footer class="footer">
      <p>2023 &copy; <a href="https://github.com/rburaksaritas"><strong>github.com/rburaksaritas</strong></a></p>
    </footer>
  </div>
</template>
  
<script>
import axios from 'axios';

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
  
<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Viewport height */
}

.header {
  padding: 20px;
  background-color: #f8f8f8;
  /* Light grey background, change as needed */
  text-align: center;
  /* Add other styles as needed */
}

.logo {
  max-width: 200px;
  /* Adjust size as needed */
  /* Add other styles as needed */
}

.product-list-container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
  width: 100%;
  margin-bottom: 5%;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 40px;
  width: 100%;
}

.product-card {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: #2c3e50;
  /* Smooth transition for transform and box-shadow */
}

.product-card:hover {
  transform: scale(1.05);
  /* Scales the card to 105% of its original size */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  /* Slightly larger shadow for depth effect */
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-price {
  color: #4CAF50;
  font-weight: bold;
  margin-top: 10px;
}

.footer {
  padding: 20px;
  background-color: #000;
  /* Black background */
  color: #fff;
  /* White text */
  text-align: center;
}

.footer a,
.footer a:visited {
  color: #fff;
  /* Sets the color to white */
  text-decoration: none;
  /* Optional: removes the underline from the link */
}

.footer a:hover {
  color: #ccc;
  /* Lighter shade of white for hover effect */
  text-decoration: none;
  /* Optional: adds underline on hover */
}</style>

