<template>
    <ul class="commentitems-container">
        <li v-for="item in data" :key="item.id">
            <Avatar :src="item.avatar" 
            :size="45"/>
            <div class="data">
                <div class="nickname">{{item.nickname}}</div>
                <div class="time">{{item.createDate}}</div>
                <div class="content" @click="cl">
                    {{item.content}}
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import Avatar from "@/components/avatar"
export default {
    components:{
        Avatar
    },
    data(){
        return {
            arr:[1,2,3,4,5,6,7,8,9,0]
        }
    },
    props:{
        data:Array,
    },
    methods:{
        cl(){
            console.log(this.data)
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.commentitems-container{
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>