import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://api.nhtsa.gov/SafetyRatings'

export default http