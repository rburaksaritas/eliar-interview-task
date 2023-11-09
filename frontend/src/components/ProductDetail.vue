<template>
    <div>
      <!-- <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p> -->
      <!-- Add more product details here -->
    </div>
  </template>
  
  <script>
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
      // TODO: function
      console.log(this.id);
    }
  };
  </script>
  