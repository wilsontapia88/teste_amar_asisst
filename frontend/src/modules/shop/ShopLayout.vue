<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css">
<div class="flex flex-wrap -mx-3 mb-5">
  <div class="w-full max-w-full px-3 mb-6  mx-auto">
    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
      <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
        <!-- card header -->
        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
            <span class="mr-3 font-semibold text-dark">Amar Asisst</span>
            <span class="mt-1 font-medium text-secondary-dark text-lg/normal">Listagem de projetos</span>
          </h3>

          <div class="mt-6 text-blue-500 text-center">
            <RouterLink  to="/products/create" class="inline-block text-[.925rem] leading-normal font-bold text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light">+ Adicionar Item</RouterLink>
          </div>
        </div>
        <!-- end card header -->
        <!-- card body  -->

        <div v-if="!products" class="text-center h-[500px]">
          <h1 class="text-xl">Carregando produto</h1>
          <p>Aguarde por favor</p>
        </div>
        <ProductList v-else :products="products"/>
      </div>
    </div>
  </div>
</div>

</template>

<script lang="ts" setup>
import { getProductsAction } from '@/modules/products/actions';
import {useQuery} from '@tanstack/vue-query'
import ProductList from '../products/components/ProductList.vue';

const {data:products, isLoading} = useQuery({
  queryKey:['products'],
  queryFn: () => getProductsAction()
})
</script>
