import axios from "axios";
// 封装axios
const requests = axios.create({
    baseURL:'http://localhost:8222',
    timeout:'3000'
})
export default requests