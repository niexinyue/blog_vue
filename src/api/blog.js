import ins from "./request.js";
//page limit categoryid keyword
//获取博客文章
export async function getBlog(page = 1, limit = 10, categoryid = -1) {
    return await ins.get("/api/blog", {
        page,
        limit,
        categoryid
    })
}
// 获取博客分类
export async function getBlogClass() {
    return await ins.get("/api/blogtype")
}

//获取文章详情页
export async function getDetailBlog(id) {
    return await ins.get(`/api/blog/${id}`)
}

//提交评论
export async function postComment(obj) {
    return await ins.post('/api/comment', obj)
}

//获取评论
export async function getComment(page = 1, limit = 10, blogid) {
    return await ins.get(`/api/comment`, {
        params: {
            blogid,
            page,
            limit,
        },
    })
}