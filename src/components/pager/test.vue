<template>
    <Pager :currentPage = "curr"
    :totalData = "1023"
    @changePage = "change"/>
</template>
<script>
import Pager from "./"
export default {
    components:{
        Pager
    },
    data(){
        return {
            curr:1
        }
    },
    methods:{
        change(n){
            this.curr = n
        }
    }
}
</script>
<style>
a{
    font-size: 40px;
}
</style>