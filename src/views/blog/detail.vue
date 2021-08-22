<template>
    <div class="detail-container">
        <Layout>
            <template #center>
                <div class="center" v-loading="isLoading"
                   ref="mainContainer">
                    <ArticleDetail :data="data"/>
                    <ArticleComment v-show="!isLoading"/>
                </div>
            </template>
            <template #right>
                <div class="right" v-loading="isLoading">
                    <ArticleTOC :data="data.toc" v-if="data"/>
                </div>
            </template>
        </Layout>
    </div>
</template>
<script>
import Layout from "@/components/layout"
import {getDetailBlog} from "@/api/blog.js"
import webFetch from "@/mixins/webFetch.js"
import ArticleDetail from "./components/articleDetail.vue"
import ArticleTOC from "./components/articelTOC.vue"
import IsLoading from "@/directives/loading.js"
import ArticleComment from "./components/articelComment.vue"
import mainScroll from "@/mixins/mainScroll.js"
import titleController from "@/utils/titleController"
export default {
    components:{
        Layout,
        ArticleDetail,
        ArticleTOC,
        ArticleComment,
    },
    directives:{
        loading:IsLoading
    },
    mixins:[webFetch(null),mainScroll("mainContainer")],
    methods:{
        async fetchData(){
            let resp = await getDetailBlog(this.$route.params.id)
            if(!resp){
                this.$router.push("/404")
                return
            }
            titleController.setSite(resp.title)
            return resp
        },
    },
}
</script>
<style lang="less" scoped>
.detail-container{
    width: 100%;
    height: 100%;
}
.center{
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
.right{
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
}
</style>