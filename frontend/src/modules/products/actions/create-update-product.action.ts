import { amAssistApi } from "@/api/amAssistApi"
import type { Product } from '../interfaces/product.interface';

export const createUpdateProductAction = async (product: Partial<Product>) => {
  const productId = product.id;
  if (productId &&  productId !== 0) {
    // Actualizar producto
    console.log('to no update')
    return await updateProduct(productId.toString(), product);
  }
  // Crear producto
  console.log('antes do create product', product)
  return await createProduct(product);
};

const updateProduct = async (productId: string, product: Partial<Product>) => {
  try {
    const { data } = await amAssistApi.patch<Product>(`/api/produtos/${productId}`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error updating product');
  }
};

const createProduct = async (product: Partial<Product>) => {
  try {

    console.log(product,'antes do post');


    const { data } = await amAssistApi.post<Product>(`/api/produtos`, product,{  headers: {
      "Content-Type": "application/json",
    },});

    console.log(data, 'resposta do backend')

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating product');
  }
};

const uploadImages = async (images: (string | File)[]) => {
  const filesToUpload = images.filter((image) => image instanceof File) as File[];
  const currentImages = images.filter((image) => typeof image === 'string') as string[];

  const uploadPromises = filesToUpload.map(async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const { data } = await amAssistApi.post<{ secureUrl: string }>('/files/product', formData);

      return data.secureUrl;
    } catch (error) {
      console.log(error);
      throw new Error('Error uploading image');
    }
  });

  const uploadedImages = await Promise.all(uploadPromises);

  console.log(uploadedImages);

  return [...currentImages, ...uploadedImages];
};
