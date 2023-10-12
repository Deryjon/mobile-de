import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://slash.sellcenter.uz/api/v1/'

export default http