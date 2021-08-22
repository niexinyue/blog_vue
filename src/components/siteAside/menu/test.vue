<template>
    <div class="con">
        <Menu />
    </div>
</template>
<script>
import Menu from "./"
export default {
    components:{
        Menu
    }
}
</script>

<style lang="less" scoped>
.con{
    width: 250px;
    height: 600px;
    margin: 100px auto;
    background-color: #000;
    padding: 50px 0 ;
}
</style>