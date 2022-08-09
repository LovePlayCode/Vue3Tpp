import requests from "@/api/utils/requests";
const BaseUrl = '/cinemaService/movie-cinema'
export default {
    // 获取电影指定电影院
    getCinemaById(id){
        return requests({
            url:BaseUrl+'/getCinema/'+id,
            method: 'get'
        })
    }
}