import requests from "@/api/utils/requests";
export default {
//    获取演员数据
    getDirect(tid){
        return requests({
            url:`/actSer/t-directors/getAct/${tid}`,
            method: 'get'
        })
    }
}

