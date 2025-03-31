<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css">
<div class="flex flex-wrap -mx-3 mb-5">
  <div class="w-full max-w-full px-3 mb-6  mx-auto">
    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
      <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
        <!-- card header -->
        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
            <span class="mr-3 font-semibold text-dark">Amar Asist</span>
            <span class="mt-1 font-medium text-secondary-dark text-lg/normal"></span>
          </h3>

        </div>
        <!-- end card header -->
        <!-- card body  -->
        <form @submit="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 bg-white px-5 gap-5">
          <div class="first-col">
            <!-- Primera parte del formulario -->
            <div class="mb-4">
              <label for="titulo" class="form-label">Titulo</label>
              <CustomInput v-model="titulo" v-bind="tituloAttrs" :error="errors.titulo" />
            </div>
            <div class="mb-4">
              <label for="descricao" class="form-label">Descrição</label>
              <CustomTextArea v-model="descricao" v-bind="descricaoAttrs" :error="errors.descricao" />
            </div>

            <div class="flex flex-row gap-3">
              <div class="mb-4">
                <label for="preco" class="form-label">Preço</label>
                <CustomInput v-model.number="preco" v-bind="precoAttrs" :error="errors.preco" />
              </div>

              <div class="mb-4">
                <label for="custo" class="form-label">Custo</label>
                <CustomInput v-model.number="custo" v-bind="custoAttrs" :error="errors.custo" />
              </div>
            </div>


          </div>

          <!-- Segunda columna -->
          <div class="first-col">
            <label for="stock" class="form-label">Imagens</label>
            <!-- Row with scrollable horizontal -->
            <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded">
              <div v-for="image of imagens" :key="image.value" class="flex-shrink-0">
                <img :src="image.value" :alt="titulo" class="w-[250px] h-[250px] rounded" />
              </div>

              <div v-for="imageFile of imageFiles" :key="imageFile.name" class="flex-shrink-0">
                <img :src="temporalImageUrl(imageFile)" class="w-[250px] h-[250px] rounded" />
              </div>
            </div>
            <!-- Upload image -->
            <div class="col-span-2 my-2">
              <label for="image" class="form-label">Subir imagen</label>

              <input
                multiple
                type="file"
                id="image"
                class="form-control"
                accept="image/*"
                @change="onFileChanged"
              />
            </div>
            <!-- Botón para guardar -->
            <div class="my-4 text-right">
              <button
                :disabled="isPending"
                type="submit"
                class="inline-block text-[.925rem] leading-normal font-bold text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>



<script src="./ProductView.ts" lang="ts"></script>

<style scoped>
.form-label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>
