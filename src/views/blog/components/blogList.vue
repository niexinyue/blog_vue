<template>
    <div class="blog-list-container"
    v-loading="isLoading"
    ref="mainContainer">
        <ul v-show="!isLoading">
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <RouterLink :to='{
                        name: "blogDetail",
                        params:{
                            id:item.id
                        }
                    }'>
                        <img v-lazy="item.thumb" :src="item.thumb" :alt="item.title" :title="item.title" />
                    </RouterLink>
                </div>
                <div class="main">
                    <RouterLink :to='{
                        name: "blogDetail",
                        params:{
                            id:item.id
                        }
                    }'>
                        <h2>{{ item.title }}</h2>
                    </RouterLink>
                    <div class="aside">
                        <span>日期：{{ formatDate(item.createDate) }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论：{{ item.commentNumber }}</span>
                        <RouterLink :to="{
                            name:'blogType',
                            params:{
                                categoryId:item.category.id
                            }
                        }" class="">{{ item.category.name }}</RouterLink>
                    </div>
                    <div class="desc">
                        {{ item.description }}
                    </div>
                </div>
            </li>
        </ul>
        <Empty v-if="data.rows.length === 0 && !isLoading"/>
        <Pager :totalData = "data.total"
        v-show="!isLoading"
        :currentPage="routeInfo.page"
        :perNumPage="routeInfo.limit"
        @changePage = "changePage"/>
    </div>
</template>
<script>
import Pager from "@/components/pager"
import webFetch from "@/mixins/webFetch.js"
import {getBlog} from "@/api/blog.js"
import IsLoading from "@/directives/loading.js"
import formatDate from "@/utils/formatDate.js"
import mainScroll from "@/mixins/mainScroll.js"
import Lazy from "@/directives/lazy.js"
import Empty from "@/components/empty"
export default {
    components:{
        Pager,
        Empty
    },
    directives:{
        loading: IsLoading,
        lazy:Lazy,
    },
    mixins:[webFetch({rows:[],total:0}),mainScroll("mainContainer")],
    methods:{
        fetchData(){
            return getBlog(2, 20, -1)
        },
        changePage(n){
            const query = {
                page: n,
                limit:this.routeInfo.limit
            }
            if(this.$route.params === -1){
                this.$router.push({
                    name:"blog",
                    query
                })
            }
            else{
                this.$router.push({
                    name:"blogType",
                    query,
                    params:{
                        categoryId:this.routeInfo.categoryId,
                    }
                })
            }
        },
        formatDate,
    },
    computed:{
        routeInfo(){
            const categoryId = +this.$route.params.categoryId || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                categoryId,
                page,
                limit
            }
        }
    },
    watch:{
        async $route(){
            this.isLoading = true;
            this.data = await this.fetchData()
            this.isLoading = false
        }
    },
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}

</style>