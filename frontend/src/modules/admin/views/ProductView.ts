import { defineComponent, ref, watch } from 'vue';
import { useQuery, useMutation } from '@tanstack/vue-query';
import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';

import { createUpdateProductAction, getProductById } from '@/modules/products/actions';

import CustomInput from '@/modules/common/CustomInput.vue'
import CustomTextArea from '@/modules/common/CustomTextArea.vue'
import { useToast } from 'vue-toastification';
import router from '@/router';
import { useRouter } from 'vue-router';

const validationSchema = yup.object({
  titulo: yup.string().required(),
  descricao: yup.string().required(),
  preco: yup.number().required(),
  custo: yup.number().required().min(1),
});


export default defineComponent({
  components:{
    CustomInput,
    CustomTextArea,
  },
  props:{
    productId:{
      type:String,
      required:true
    }
  },

  setup(props) {
    const router = useRouter();
    const toast = useToast();
    console.log(props)

    const {data:product,     isError,
      isLoading,} = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductById(props.productId),
      retry: false,
    });

    const {
      mutate,
      isPending,
      isSuccess: isUpdateSuccess,
      data: updatedProduct,
    } = useMutation({
      mutationFn: createUpdateProductAction,
    });


    const {values, defineField, errors, handleSubmit ,resetForm, meta} = useForm({
      validationSchema
    })


    const[titulo, tituloAttrs] = defineField('titulo')
    const[preco, precoAttrs] = defineField('preco')
    const[custo, custoAttrs] = defineField('custo')
    const[descricao, descricaoAttrs] = defineField('descricao')

    const { fields: imagens } = useFieldArray<string>('imagens');
    const imageFiles = ref<File[]>([]);


    const onSubmit = handleSubmit(async (values) => {

      // values.image_path = imageFiles.value

      // const product = await createUpdateProductAction(values);
      // console.log( product );


      const formValues = {
        ...values,
        imagens: [...values.imagens, ...imageFiles.value],
      };

      console.log(values, 'sao as values')
      mutate(formValues);
    });


    const onFileChanged = (event: Event) => {
      const fileInput = event.target as HTMLInputElement;
      const fileList = fileInput.files;

      if (!fileList) return;
      if (fileList.length === 0) return;

      for (const imageFile of fileList) {
        imageFiles.value.push(imageFile);
      }
    };

    watch(
      product,
      () => {
        if (!product) return;

        resetForm({
          values: product.value,
        });
      },
      {
        deep: true,
        immediate: true,
      },
    );


    watch(isUpdateSuccess, (value) => {
      if (!value) return;

      toast.success('Producto actualizado correctamente');
      router.replace(`/products/${updatedProduct.value!.id}`);

      resetForm({
        values: updatedProduct.value,
      });
      imageFiles.value = [];
    });

    return {
      values,
      errors,
      // meta,

      titulo,
      tituloAttrs,
      preco,
      precoAttrs,
      custo,
      custoAttrs,
      descricao,
      descricaoAttrs,

      imagens,
      imageFiles,
      onFileChanged,

      isPending,

      // Actions
      onSubmit,

      temporalImageUrl: (imageFile: File) => {
        return URL.createObjectURL(imageFile);
      },
    }

  },
});
