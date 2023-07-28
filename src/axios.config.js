import axios from "axios";

const http = axios.create()

http.defaults.baseURL = ''

export default http