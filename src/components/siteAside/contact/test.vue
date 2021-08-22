<template>
    <div class="cont">
        <Contact/>
    </div>
</template>
<script>
import Contact from "./"
export default {
    components:{
        Contact
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.cont{
    width: 250px;
    height: 600px;
    background-color: @dark;
    margin: 100px auto;
    padding: 200px 0;
}
</style>