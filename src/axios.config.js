import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://api.auto-data.net'

export default http