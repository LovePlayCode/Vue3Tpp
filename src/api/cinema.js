import requests from "@/api/utils/requests";
const BaseUrl = '/cinemaService/t-cinema/'
export default {
    // 获取电影院全部信息
    getAllCinema(){
        return requests({
            url:BaseUrl+'/getAllCinema',
            method: 'get'
        })
    },

}