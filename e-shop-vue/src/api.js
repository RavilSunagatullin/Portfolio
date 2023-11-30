import axios from "axios";
import config from "@/config.js";

export const http = axios.create({
    baseURL: config.MOCK,
})


export default {
    async getPopularProducts(){
        try {
            const response = await http.get('/products/popular')
            return response.data
        }
        catch (e){
            console.log(e)
        }
    },
    async getProduct(id) {
        try{
            const response = await http.get(`/products/${id}`, {
                headers: {
                    Prefer: `code=200, example=Example ${id}`,
                }
            })
            console.log(response.data)
            return response.data
        }
        catch (e){
            console.log(e)
        }
    }
}