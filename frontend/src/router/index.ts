import { authRoutes } from '@/modules/auth/routes';
import ShopLayout from '@/modules/shop/ShopLayout.vue';
import ProductList from '@/modules/products/components/ProductList.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { adminRoutes } from '@/modules/admin/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/productlist',
      name: 'productList',
      component: ShopLayout,
    },

    // {
    //   path: '/criarproduto',
    //   name: 'criarproduto',
    //   component: ProductRegister,
    // },

    {
      path: '/products/:productId',
      name: 'admin-product',
      props: true,
      component: () => import('@/modules/admin/views/ProductView.vue'),
    },




    authRoutes

    // adminRoutes
  ],
});

export default router;
