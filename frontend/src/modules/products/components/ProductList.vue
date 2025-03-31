<template>
   <div class="flex-auto block py-8 pt-6 px-9">
          <div class="overflow-x-auto">
            <table class="w-full my-0 align-middle text-dark border-neutral-200">
              <thead class="align-bottom">
                <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                  <th class="pb-3 text-start min-w-[175px]">TITULO</th>
                  <th class="pb-3 text-end min-w-[100px]">IMAGENS</th>
                  <th class="pb-3 text-end min-w-[100px]">PRECO VENDA</th>
                  <th class="pb-3 pr-12 text-end min-w-[175px]">CUSTO</th>
                  <th class="pb-3 pr-12 text-start min-w-[100px]">DESCRICAO</th>
                  <th class="pb-3 text-end min-w-[50px]">OPCOES</th>
                </tr>
              </thead>
              <tbody>
                <ProductItem v-for="product in products" :key="product.id" :product="product"/>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script lang="ts" setup>
import ProductItem from './ProductItem.vue';

import type { Product } from '../interfaces/product.interface';

interface Props {
    products:Product[]
}
defineProps <Props>()
</script>
