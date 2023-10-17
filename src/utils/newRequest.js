import axios from 'axios'

const newRequest = axios.create({baseURL: 'https://vs-fiverr-app-backend.vercel.app/api', withCredentials:true})

export default newRequest
