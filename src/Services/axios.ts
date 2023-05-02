import axios from "axios";

const Base_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: Base_URL,
    headers:{}
})


axiosInstance.interceptors.response.use((response) => Promise.resolve(response), 
(error) => {
    // if (error?.response?.status === 401) {
    //     localStorage.clear()
    //     window.open(Base_URL,'_self')
    //   }
      return Promise.reject(error)
})

axiosInstance
.interceptors.request.use((config) => {
    // if (!config.headers.Authorization) {
    //     config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    //   }
    config.headers.Authorization = null
      return config
},error => Promise.reject(error) 
)

export default axiosInstance