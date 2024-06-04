import { env } from '@/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // cookies do front seja enviados automaticamente para o backend
})
//antes de chamar todas as requisicoes vai chamamar esta funcao de teste
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))

    return config
  })
}