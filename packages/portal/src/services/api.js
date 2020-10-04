import axios from 'axios'

export const serviceURL = 'http://localhost:3333'
export const baseURL = serviceURL + '/api'
const api = axios.create({ baseURL })

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('@token')
  request.headers.Authorization = `Bearer ${token}`
  return request
})

api.interceptors.response.use((response) => {
  if (response.status === 401) {
    window.location.href = '/sign'
  }
  return response
}, (error) => {
  error.message = error.response.data.message
  return Promise.reject(error)
})

export default api
