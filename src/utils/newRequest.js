import axios from 'axios'

const newRequest = axios.create({baseURL: 'https://vs-fiverr-app-backend-q04oes7hf-venkateshsircilla123s-projects.vercel.app/api', withCredentials:true})

export default newRequest
