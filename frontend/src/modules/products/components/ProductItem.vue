<template>

    <tr class="border-b border-dashed last:border-b-0">
        <td class="p-3 pl-0">
        <div class="flex items-center">
            <div class="flex flex-col justify-start">
            <span href="javascript:void(0)" class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">{{product.titulo}}
            </span>
            </div>
        </div>
        </td>
        <td class="p-3 pr-0 text-end">
            <div class="relative inline-block shrink-0 rounded-2xl me-3">
            <img :src="product.imagens[1]" class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="">
            </div>
        </td>
        <td class="p-3 pr-0 text-end">
        <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
           {{product.preco}} </span>
        </td>
        <td class="p-3 pr-12 text-end">
        <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">{{product.custo}}</span>
        </td>
        <td class="pr-0 text-start">
        <span class="font-semibold text-light-inverse text-md/normal">{{product.descricao}}</span>
        </td>
        <td class="p-3 pr-0 text-end flex ">


          <RouterLink
             :to="`/products/${product.id}`"
          >
          <button title="Editar" class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
              <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 " alt="Editar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </span>
          </button>
          </RouterLink>




        </td>
    </tr>

</template>

<script lang="ts" setup>
    import type { Product } from '../interfaces/product.interface';
    interface Props {
        product:Product
    }
    defineProps <Props>()
</script>
