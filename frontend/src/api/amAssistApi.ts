import axios from 'axios'

const amAssistApi = axios.create({
  baseURL: import.meta.env.VITE_AM_ASSIST_API_URL
})



export {amAssistApi}
