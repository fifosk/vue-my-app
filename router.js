import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/newwindow',
      component: NewWindow
    }
  ];

  const router = new VueRouter({
    routes
  });

  export default router;
