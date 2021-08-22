<template>
    <ul class="list-container">
        <li v-for="(value, i) in list" :key="i" >
            <span
            @click="handleClick(value)"
            :class="{active:value.isSelect}">{{value.name}}</span>
            <span
            v-show="value.aside"
            :class="{active:value.isSelect}"
            @click="handleClick(value)"
            class="text">
                {{value.aside}}
            </span>
            <List :list="value.children" @select="handleClick"/>
        </li>  
    </ul>
</template>
<script>
export default {
    name:"List",
    // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        handleClick(value){
            if(!value.isSelect){
                this.$emit("select",value)
            }
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.list-container{
    list-style: none;
    padding: 0;
    align-items: center;
    .list-container{
        margin-left: 1em;
    }
    .active{
        color: @warn;
        font-weight: bold;
    }
    li{
        line-height: 40px;
        min-height: 40px;
    }
    .text{
        color:@gray;
        font-size: 70%;
        padding-left: 10px;
    }
    span:hover{
        cursor: pointer;
        color: #f40;
    }
}
</style>