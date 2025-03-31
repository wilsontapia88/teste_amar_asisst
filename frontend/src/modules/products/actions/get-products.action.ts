import { amAssistApi } from "@/api/amAssistApi"
import { Product } from '../interfaces/product.interface';
import { getProductImageAction } from "./get-product-image.action";

export const getProductsAction = async () => {
  try {
    const {data} = await amAssistApi.get<Product[]>('/api/produtos')

    return data.map( product => ({
      ...product,
      imagens: product.imagens ? product.imagens.map(getProductImageAction) : []
    }));


  } catch (error) {
    console.log(error)
    throw new Error('Error getting products')
  }
}
