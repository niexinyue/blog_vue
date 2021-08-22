// src 字符串 必须 图片链接
// size 数字 非必须 图片大小 默认值150
<template>
    <img :src="src" alt="" class="avatar-container"
    :style="{
        width:size +'px',
        height:size + 'px',
    }"
    >
</template>
<script>
export default {
    props:{
        src:{
            type:String,
            required:true,
        },
        size:{
            type:Number,
            default:150,
        }
    }
}
</script>
<style scoped>
.avatar-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>