<template>
    <div class="siteAside-container" v-if="data">
        <template  v-if="data">
            <Avatar :src = "data.avatar"/>
            <h1 class="title">{{data.siteTitle}}</h1>   
        </template>
        <Menu/>
        <Contact  v-if="data"/>
        <p class="footer"  v-if="data">
            {{data.icp}}
        </p> 
    </div>
</template>
<script>
import Avatar from "@/components/avatar"
import Contact from "./contact"
import Menu from "./menu"
import {mapState} from "vuex"
export default {
    components:{
        Avatar,
        Menu,
        Contact
    },
    computed:{
        ...mapState("sett",["data"])
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.siteAside-container{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>