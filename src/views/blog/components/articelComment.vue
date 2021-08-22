<template>
    <div class="article" id="bottomcomment" ref="bott">
        <Comment v-show="data" :data="data" title="评论内容" 
        :isListLoading="isLoading"
        @submitI="handleSubmit"/>
    </div>
</template>
<script>
import Comment from "@/components/comment"
import {getComment,postComment} from "@/api/blog.js"
import webFetch from "@/mixins/webFetch.js"
export default {
    components:{
        Comment
    },
    mixins:[webFetch({total: 0, rows: []})],
    methods:{
        async fetchData(){
            return await getComment(this.page, this.limit, this.$route.params.id)
        },
        async fethcMore(){
            if(!this.hasMore){
                return
            }
            this.isLoading = true;
            this.page ++
            const moreData = await getComment(this.page, this.limit, this.$route.params.id)
            this.data.total = moreData.total
            this.data.rows = this.data.rows.concat(moreData.rows)
            this.isLoading = false;
        },
        async handleSubmit(form,callback){
            const obj = await postComment({
                blogId: this.$route.params.id,
                ...form,
            });
            this.data.rows.unshift(obj);
            this.data.total ++;
            callback("提交成功")
        },
        handleMyScroll(dom){
            if(this.isLoading || !dom){
                return
            }
            const range = 200
            const abs = Math.abs(dom.scrollHeight - dom.scrollTop - dom.clientHeight)
            if(abs < range){
                this.fethcMore()
            }
        }
    },
    data(){
        return {
            page:1,
            limit:10
        }
    },
    computed:{
        hasMore(){
            return this.data.rows.length < this.data.total;
        }
    },
    mounted(){
        this.$bus.$on("mainScroll",this.handleMyScroll)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleMyScroll)
    }
}
</script>