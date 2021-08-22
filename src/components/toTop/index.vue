<template>
    <div class="toTop-container" v-show="show" @click="handleClick">top</div>
</template>
<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        handleMyScroll(dom){
            if(!dom){
                this.show = false
                return
            }
            this.show = dom.scrollTop >= 500;
        },
        handleClick(){
            this.$bus.$emit("setMainScroll",0)
        },
    },
    created(){
        this.$bus.$on("mainScroll",this.handleMyScroll)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleMyScroll)
    },
    watch:{
        $route(newVal, oldVal){
            this.show = false
        }
    } 
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.toTop-container{
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: @primary;
    font-size: 25px;
    z-index: 99;
    position: fixed;
    right: 50px;
    bottom: 50px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    color: #fff;
}
</style>