import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://api.api-ninjas.com'

export default http