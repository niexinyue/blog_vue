<template>
    <Layout>
        <template v-slot:left>
            <div class="left">
                left
            </div>
        </template>
        <template v-slot:center>
            <div class="center">
                center
            </div>
        </template>
        <template v-slot:right>
            <div class="right">
                right
            </div>
        </template>
    </Layout>
</template>
<script>
import Layout from "@/components/layout"
export default {
    components:{
        Layout
    }
}
</script>
<style lang="less" scoped>
.layout-container{
    width: 100%;
    height: 100vh;
    white-space: nowrap;
}
.left{
    width: 200px;
    height: 100%;
    background-color: #146;
}
.center{
    background-color: #f32;
}
.right{
    width: 300px;
    background-color: #789;
}
</style>