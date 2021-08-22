<template>
    <div class="b">
        <ImageLoader
        :duration = "6000"
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        @loadSuccess="cb"/>
    </div>
</template>

<script>
import ImageLoader from "./"
export default {
    components:{
        ImageLoader
    },
    methods:{
        cb(){
            console.log("加载成功")
        }
    }
}
</script>
<style lang="less" scoped>
    .b{
        width: 500px;
        height: 400px;
        margin: 0 auto;
        border: 1px solid black;
    }
</style>