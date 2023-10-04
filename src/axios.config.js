import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'http://server.sellcenter.uz/api/v1/'

export default http