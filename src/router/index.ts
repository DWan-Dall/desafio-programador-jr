import { createRouter, createWebHistory } from 'vue-router';
import ItemForm from '@/components/ItemForm.vue';
import ItemList from '@/components/ItemList.vue';

const routes = [
  {
    path: '/form',
    name: 'form',
    component: ItemForm
  },
  {
    path: '/list',
    name: 'list',
    component: ItemList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;