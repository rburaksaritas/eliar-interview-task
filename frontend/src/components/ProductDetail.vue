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
            <div v-if="product" class="product-actions">
                <button @click="goBack" class="go-back-button">Go Back</button>
                <button @click="showUpdateForm = true" class="update-button">Update</button>
                <button @click="deleteProduct" class="delete-button">Delete</button>
            </div>
        </div>


        <div v-if="showUpdateForm" class="update-form">
            <input v-model="updateForm.name" placeholder="Name">
            <textarea v-model="updateForm.description" placeholder="Description"></textarea>
            <input v-model="updateForm.price" placeholder="Price">
            <input v-model="updateForm.image_url" placeholder="Image URL">
            <button @click="updateProduct">Submit Update</button>
            <button @click="showUpdateForm = false">Cancel</button>
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
            product: null,
            showUpdateForm: false, // To toggle the update form
            updateForm: { // To bind form inputs
                name: '',
                description: '',
                price: '',
                image_url: ''
            }
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
        },
        updateProduct() {
            axios.put(`/api/products/${this.id}`, this.updateForm)
                .then(response => {
                    this.product = response.data;
                    this.showUpdateForm = false; // Hide the form after update
                    // You might want to show a success message or redirect
                })
                .catch(error => {
                    console.error('Error updating product:', error);
                    // Handle error here
                });
        },
        deleteProduct() {
            axios.delete(`/api/products/${this.id}`)
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                    // Handle error here
                });
        },
        goBack() {
            this.$router.push('/');
        },
    },
    watch: {
        product(newValue) {
            // When the product data is loaded, initialize the form with its data
            this.updateForm = { ...newValue };
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
    text-align: center;
}

.logo {
    max-width: 200px;
}

.product-detail-container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(50vh - 4rem);
    flex-grow: 1;
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

.product-actions {
    display: flex;
    justify-content: center;
    /* Center the buttons */
    gap: 1rem;
    /* Space between buttons */
    margin-top: 1rem;
}

.product-actions button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    /* Bootstrap primary color for example */
    color: white;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    /* Remove outline */
    transition: background-color 0.2s, transform 0.2s;
    /* Smooth transition for background color and transform */
}

.product-actions button:hover {
    background-color: #0056b3;
    /* Darken the color slightly when hovered */
    transform: translateY(-2px);
    /* Slight lift effect */
}

.product-actions button:active {
    transform: translateY(1px);
    /* Push down effect when clicked */
}

.product-actions button.delete-button {
    background-color: #dc3545;
    /* Bootstrap danger color for delete button */
}

.product-actions button.delete-button:hover {
    background-color: #c82333;
    /* Darken the color slightly when hovered */
}

.product-actions .go-back-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #6c757d;
    /* Bootstrap secondary color for example */
    color: white;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    /* Remove outline */
    transition: background-color 0.2s, transform 0.2s;
    /* Smooth transition for background color and transform */
}

.go-back-button:hover {
    background-color: #5a6268;
    /* Darken the color slightly when hovered */
    transform: translateY(-2px);
    /* Slight lift effect */
}

.go-back-button:active {
    transform: translateY(1px);
    /* Push down effect when clicked */
}

.update-form {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 1rem auto;
}

.update-form input,
.update-form textarea {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.update-form button {
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

.update-form button:hover {
    background-color: #4cae4c;
}

.footer {
    padding: 20px;
    background-color: #000;
    color: #fff;
    text-align: center;
}

.footer a,
.footer a:visited {
    color: #fff;
    text-decoration: none;
}

.footer a:hover {
    color: #ccc;
    text-decoration: none;
}</style>