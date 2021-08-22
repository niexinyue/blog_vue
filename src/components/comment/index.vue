<template>
    <div class="comment-container">
        <Form v-on="$listeners"/>
        <h3 @click="con">{{title}}<span>({{data.total}})</span></h3>
        <CommentItems :data="data.rows"/>
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>
<script>
import Form from "./components/form.vue";
import CommentItems from "./components/commentitems.vue"
import loading from "@/directives/loading.js"
export default {
    components:{
        Form,
        CommentItems
    },
    directives:{
        loading:loading
    },
    props:{
        data:{
            type:Object
        },
        title:{
            type:String
        },
        isListLoading:{
            type:Boolean
        }
    },
    methods:{
        con(){
            console.log(this.data.rows)
        },
        f(){
            console.log("baba",this.$listeners)
        }
    }
}
</script>
<style scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>