<template>
    <div class="empty-container">
        <Icon ty = "empty"/>
        <div>{{text}}</div>
    </div>
</template>
<script>
import Icon from "@/components/icon"
export default {
    components:{
        Icon
    },
    props:{
        text:{
            default:"无数据"
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/public.less";
.empty-container{
    color:@gray;
    .self-center(absolute);
    text-align: center;
}
.icon-container {
  font-size: 72px;
}
</style>