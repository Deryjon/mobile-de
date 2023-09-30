import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://api.behad.uz/api/v1/'

export default http