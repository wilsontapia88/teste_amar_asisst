import { amAssistApi } from "@/api/amAssistApi"
import type { Product } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductById = async (productId: string): Promise<Product> => {

  if (productId === 'create') {
    return {
      id:         0,
      titulo:     '',
      imagens:    [] as string[],
      preco:      '',
      custo:      '',
      descricao:  '',
      created_at: new Date(),
      updated_at: new Date(),

    };
  }

  try {
    const { data } = await amAssistApi.get<Product>(`/api/produtos/${productId}`);
    console.log({ data });
    return {
      ...data,
      imagens: data.imagens.map(getProductImageAction),
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id ${productId}`);
  }
};
