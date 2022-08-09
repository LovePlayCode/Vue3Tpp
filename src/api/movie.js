import requests from "@/api/utils/requests";
export default {
    getAllMovie(){
        return requests({
            url:'/service-mov/m-movie/getAll',
            method:'get'
        })
    },
    // 根据id查询指定数据
    getByIdMovie(tid){
        return requests({
            url:`/service-mov/m-movie/getById/${tid}`,
            method:'get'
        })
    },
    // 获取电影封面图片
    getImage(tid){
        return requests({
            url:`/service-mov/m-movie/getImage/${tid}`,
            method:'get'
        })
    }

}