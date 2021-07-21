import { createRouter, createWebHistory } from 'vue-router';

import App from '../App.vue';
import Detail from '../pages/Detail.vue';
import Home from '../pages/Home.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;