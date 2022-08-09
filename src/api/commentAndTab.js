import requests from "@/api/utils/requests";
export default {
    // 根据电影id获取电影评论和标签
    getComAndTab(tid){
        return requests({
            url:'/comTabSer/comment/getCommentById?tid='+tid,
            method:'get'
        })
    }
}