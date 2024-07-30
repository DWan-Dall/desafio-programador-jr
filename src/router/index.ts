import { createRouter, createWebHistory } from 'vue-router';
// import MainLayout from '@/layouts/MainLayout.vue';
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


// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ItemForm from '@/components/ItemForm.vue'
// import ItemList from '@/components/ItemList.vue'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/form',
//     name: 'form',
//     component: ItemForm
//   },
  // {
  //   path: '/list',
  //   name: 'list',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "list" */ '../views/ItemList.vue')
  // }


//   Vue.use(VueRouter);

// const routes = [
//   { path: '/form', component: FormPage },
//   { path: '/list', component: ListPage },
//   { path: '*', redirect: '/list' }
// ];


// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
