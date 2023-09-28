import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://https://sellcenter.onrender.com/'

export default http