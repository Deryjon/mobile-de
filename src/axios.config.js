import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://server.sellcenter.eu/'

export default http