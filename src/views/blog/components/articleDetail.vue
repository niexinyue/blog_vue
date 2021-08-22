<template>
    <div class="blog-articleDetail-container" v-if="data">
        <div class="header">
            <h1>{{data.title}}</h1>
            <div class="aside">
                <span>日期：{{data.createDate}}</span>
                <span>浏览：{{data.scanNumber}}</span>
                <span><a href="#bottomcomment">评论：{{data.commentNumber}}</a></span>
                <span>
                    <RouterLink :to='{
                        name:"blogType",
                        params:{
                            categoryId:data.category.id
                        },
                    }'>{{data.category.name}}</RouterLink>
                </span>
            </div> 
        </div>
        <div class="markdown-body"
        v-html="data.htmlContent"></div>
    </div>
</template>
<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css"
export default {
    props:{
        data:{
            type:Object
        }
    },
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.header{
    h1{
        margin-bottom: 10px;
    }
    .aside{
        font-size: 12px;
        color: @gray;
        span,
        a {
            margin-right: 15px;
        }
    }
}
.markdown-body{
    margin: 2em 0;
}
</style>