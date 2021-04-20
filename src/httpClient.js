import axios from 'axios'
import {LS_TOKEN} from "./constants";
import * as dayjs from 'dayjs'

let instance = axios.create({
   baseURL: process.env.VUE_APP_API_HOST,
   timeout: 15000,
   headers: {
      'Content-Type': 'application/json',
      'x-platform': 'WEB',
   }
})
instance.interceptors.request.use((config) => {
   const token = localStorage.getItem(LS_TOKEN)
   config.headers['offset'] = dayjs().utcOffset()
   config.headers['timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone
   if (token)
      config.headers['Authorization'] = 'Bearer ' + token
   return config
})

instance.interceptors.response.use((response) => {
   return response;
}, (error) => {
   if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.href = '/'
   } else {
      return Promise.reject(error);
   }
});

export default instance
