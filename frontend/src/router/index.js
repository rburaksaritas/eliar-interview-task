import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import ProductDetail from '@/components/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id', // :id is a dynamic segment
    name: 'ProductDetail',
    component: ProductDetail,
    props: true // pass the id as a prop to the component
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
