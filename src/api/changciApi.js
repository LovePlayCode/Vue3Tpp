import requests from "@/api/utils/requests";
const baseURL = '/changciSer/s-movie'
export default {
    getChangCiByTidAndCid(cid){
        return requests({
            url: baseURL+'/getChangciData/'+cid,
            method:'get'
        })

    }
}