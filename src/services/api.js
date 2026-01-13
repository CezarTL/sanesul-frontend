import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sanesul-backend.onrender.com',
})
