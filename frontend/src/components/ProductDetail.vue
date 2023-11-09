<template>
    <div class="wrapper">
        <header class="header">
            <img src="https://www.eliar.com/wp-content/uploads/2021/03/Eliar-Elektronik_Logo.svg" alt="Company Logo"
                class="logo" />
        </header>
        <div class="product-detail-container">
            <div v-if="product" class="product-detail-card">
                <img :src="product.image_url" :alt="product.name" class="product-detail-image" />
                <div class="product-detail-info">
                    <h1>{{ product.name }}</h1>
                    <p class="product-detail-description">{{ product.description }}</p>
                    <p class="product-detail-price">{{ product.price }} $</p>
                    <!-- Add more product details here -->
                </div>
            </div>
            <div v-else class="product-loading">
                <p>Loading...</p>
                <!-- Or some loading indicator -->
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
    name: 'ProductDetail',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            product: null
        };
    },
    mounted() {
        this.fetchProductData();
    },
    methods: {
        fetchProductData() {
            axios.get(`/api/products/${this.id}`)
                .then(response => {
                    this.product = response.data;
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                    // Handle error here, such as displaying an error message to the user
                });
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

.product-detail-container {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(50vh - 4rem);
    flex-grow: 1;
    /* Adjust for the padding */
}

.product-detail-card {
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 0.5rem;
    background: #fff;
    margin-top: 2rem;
}

.product-detail-image {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
}

.product-detail-info {
    text-align: center;
}

.product-detail-description {
    margin: 1rem 0;
}

.product-detail-price {
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
}

.product-loading {
    text-align: center;
}

/* Add responsive design */
@media (min-width: 768px) {
    .product-detail-card {
        flex-direction: row;
    }

    .product-detail-info {
        margin-left: 2rem;
    }

    .product-detail-image {
        max-width: 50%;
    }
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
}
</style>