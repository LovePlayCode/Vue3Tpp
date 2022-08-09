import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
import MovieMain from "@/components/infoMovieMain/MovieMain";
import UpcomingMovies from "@/components/infoMovieMain/UpcomingMovies";
import TheaterMovie from "@/components/MovieTheatre/TheaterMovie";
import IndexMovie from "@/components/infoMovieMain/IndexMovie";
import movieDetail from "@/components/upComingMovie/MovieDetail";
import buyMovie from "@/components/infoMovieMain/BuyMovie";
import BuyTicket from "@/components/infoMovieMain/BuyTicket";
import theaterDetail from "@/components/MovieTheatre/TheaterDetail";
import showTIckInfo from "@/components/infoMovieMain/showTIckInfo";
import showArtist from "@/components/artist/ShowArtist";
import TickItem from "@/components/infoMovieMain/TickItem";
// import noKaiFa from "@/pages/NoKaiFa";
const routes = [
    // {
    //     path:'/index',
    //     children:[
    //         {
    //             path:"hotMovie",
    //             component:MovieMain
    //         },
    //         {
    //             path: "upComingMovie",
    //             component: UpcomingMovies
    //         }
    //     ]
    // },
    {
        path:'/theater',
        component:TheaterMovie,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/noKaiFa',
        // 动态引入
        component: import('@/pages/NoKaiFa'),
        meta: {
            showFooter: true
        }
    },
    // {
    //     // 正在热映
    //     path:'/hotMovie',
    //     component:MovieMain
    // },
    // 首页跳转
    {
        path:'/',
        // 路由重定向
        redirect:'/index/hotMovie'
    },
    {

        path:'/index',
        component:IndexMovie,
        redirect: '/index/hotMovie',
        meta:{showFooter:true},
        children:[

            {
                // 正在热映
                path: 'hotMovie',
                component: MovieMain,
                // meta:{showFooter:true}
            },
            {
                // 即将上映
                path: 'upComingMovie',
                component: UpcomingMovies,
                // meta: {jj:'2',showFooter:"false"},
            }
        ]
    },
    // 即将上映电影详情
    {
        path:'/movieDetail',
        component: movieDetail
    },
    // 热映电影购票页面
    {
        path: '/buyMovie/:id',
        component: buyMovie
    },
    {
        path: '/goBuyTicket',
        name: 'goBuyTic',
        component: BuyTicket,
        props:route=>({id:route.params.id})
        // props:true
    },
    {
        path: '/goCinemaDetailBuy/:cid?/:tid?',
        component: theaterDetail,
        children: [
            {
                path:'showTickInfo',
                component: showTIckInfo,
                children:[
                    {
                        path:'tickItem',
                        component: TickItem
                    }
                ]
            }
        ]
    },
    //演职员页面
    {
        path: '/showArtist',
        component: showArtist

    }    //
    // {
    //     // 即将上映
    //     path:'/upComingMovie',
    //     component:UpcomingMovies
    // }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router