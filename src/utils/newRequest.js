import axios from 'axios'

const newRequest = axios.create({baseURL: 'https://vsfiverrapp.onrender.com/api/', withCredentials:true})

export default newRequest