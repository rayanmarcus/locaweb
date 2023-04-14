import axios from 'axios'

export const httpApiLogin = axios.create({
  baseURL: 'https://fakestoreapi.com'
})
