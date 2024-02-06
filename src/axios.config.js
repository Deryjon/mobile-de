import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://server.sellcenter.eu/api/v1'

export default http