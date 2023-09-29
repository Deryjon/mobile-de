import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://sellcenter.onrender.com/api/v1'

export default http