import Mock from "mockjs"
import qs from "querystring"
//请求模拟(/^\/api\/message\/?(\?.+)?$/
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
        const query = qs.parse(options.url)
        return Mock.mock({
            code: 0,
            msg: "",
            data: {
                total: 52,
                [`rows|${query.limit || 10}`]: [{
                    id: "@guid",
                    nickname: "@cname",
                    content: "@cparagraph(1, 10)",
                    createDate: Mock.Random.now("yyyy-MM-dd HH:mm:ss"),
                    "avatar|1": [
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                    ],
                }, ],
            },
        })
    })
    //post过来的模拟
Mock.mock("/api/message", "post", function() {
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            id: "@guid",
            nickname: "@cname",
            content: "@cparagraph(1, 10)",
            createDate: Mock.Random.now("yyyy-MM-dd HH:mm:ss"),
            "avatar|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
            ],
        },
    })
})