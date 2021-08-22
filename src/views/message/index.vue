<template>
  <div class="message-container" @submitI="handleSubmit" ref="messageContainer">
      <Comment :data="data"
      title="留言板"
      :isListLoading="isLoading"
       @submitI="handleSubmit"/>
  </div>
</template>

<script>
import Comment from "@/components/comment";
import webFetch from "@/mixins/webFetch.js";
import * as api from "@/api/message";
import mainScroll from "@/mixins/mainScroll.js"
export default {
    components:{
        Comment
    },
    mixins:[webFetch({total:0,rows:[]}),mainScroll("messageContainer")],
    data(){
        return {
            page:1,
            limit:10
        }
    },
    methods:{
        async fetchData(){
            return await api.getMessage(this.page,this.limit)
        },
        async handleSubmit(us,callback){
            const resp = await api.postMessage(us)
            callback("感谢评论")
            this.data.total ++
            this.data.rows.unshift(resp)
        },
        async fetchMore(){
            if(!this.hasMore){
                return 
            }
            this.isLoading = true
            this.page ++
            const resp = await this.fetchData(this.page,this.limit)
            this.data.total = resp.total
            this.data.rows = this.data.rows.concat(resp.rows)
            this.isLoading = false
        },
        handleMyScroll(dom){
            if(this.isLoading || !dom){
                return
            }
            const range = 100;
            const abs = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
            if(abs < range){
                this.fetchMore()
            }
        }
    },
    computed:{
        hasMore(){
            return this.data.rows.length < this.data.total
        }
    },
    created(){
        this.$bus.$on("mainScroll",this.handleMyScroll)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleMyScroll)
    }
};
</script>

<style>
.message-container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
.comment-container{
    width: 700px;
    margin: 0 auto;
}
</style>