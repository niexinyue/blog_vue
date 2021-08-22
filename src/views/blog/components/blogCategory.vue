<template>
    <div class="blog-category-container"
    v-loading = "isLoading">
        <h2>文章分类</h2>
        <RightList :list="list"
        @select="handleClick"/>
    </div>
</template>
<script>
import RightList from "./rigthList.vue"
import webFetch from "@/mixins/webFetch.js"
import {getBlogClass} from "@/api/blog.js"
import IsLoading from "@/directives/loading.js"
export default {
    components:{
        RightList
    },
    directives:{
        loading:IsLoading
    },
    mixins:[webFetch([])],
    methods:{
        fetchData(){
            return getBlogClass()
        },
        handleClick(i){
            const query = {
                page:1,
                limit:this.limit
            }
            if(i.id === -1){
                this.$router.push({
                    name:"blog",
                    params:{
                        categoryId:""
                    },
                    query
                })
            }else{
                this.$router.push({
                    name:"blogType",
                    query,
                    params:{
                        categoryId:i.id
                    }
                })
            } 
        }
    },
    computed:{
        categoryId(){
            return +this.$route.params.categoryId || -1;
        },
        limit(){
            return +this.$route.query.limit || 10;
        },
        list(){
            const totalNum = this.data.reduce((a,b)=>
                a + b.articleCount
            ,0)
            const arr = [ { name: "全部", id: -1, articleCount: totalNum },
                ...this.data]
            return arr.map((it)=>({
                ...it,
                isSelect:this.categoryId === it.id,
                aside: `${it.articleCount}篇`,
            }))
        }
    },
}
</script>
<style scoped lang="less">
.blog-category-container{
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    overflow-y: auto;
    h2{
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
}
</style>