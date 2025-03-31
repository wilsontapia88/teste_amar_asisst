export const getProductImageAction = (imageName:string):string => {

  return imageName.includes('http')
  ? imageName
  :`${import.meta.env.VITE_AM_ASSIST_API_URL}/storage/${imageName}`
}
