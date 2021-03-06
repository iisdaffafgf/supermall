import { request } from "./request"

// 首页轮播图，推荐数据
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

// 首页商品数据
export function getHomeData(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}