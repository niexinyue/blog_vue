// currentPage 当前页 （父级data传递）
// totalData 总的数据量
//changePage 事件 参数1：为页码

<template>
    <div class="pager-container">
        <a   :class="{disabled:currentPage === 1}"
        @click="change(1)">|&lt;&lt;</a>

        <a  :class="{disabled:currentPage === 1}"
        @click="change(currentPage - 1)">&lt;&lt;</a>

        <a v-for="(value,index) in getArr" 
        :key="index"
        :class="{active:currentPage === value}"
        @click="change(value)">{{value}}</a>

        <a 
        :class="{disabled:currentPage === totalPage}"
        @click="change(currentPage + 1)">&gt;&gt;</a>
        
        <a  :class="{disabled:currentPage === totalPage}"
        @click="change(totalPage)">&gt;&gt;|</a>
    </div>
</template>
<script>
export default {
    props:{
        currentPage:{
            type:Number,
            default: 1,
        },
        totalData:{
            type:Number,
            default:100
        },
        perNumPage:{
            type:Number,
            default: 10
        }
    },
    computed:{
        totalPage(){
            return Math.ceil(this.totalData / this.perNumPage)
        },
        minVis(){
            let min = this.currentPage - 5;
            if (min < 1){
                min = 1
            }
            return min
        },
        maxVis(){
            let max = this.minVis + 10;
            if (max > this.totalPage){
                max = this.totalPage
            }
            return max
        },
        getArr(){
            let arr = []
            for (var i = this.minVis; i <= this.maxVis;i++){
                arr.push(i)
            }
            return arr
        }
    },
    methods:{
        change(n){
            if(n > this.totalPage){
                n = this.totalPage
            }
            if(n < 1){
                n = 1
            }
            // this.currentPage = n
            this.$emit("changePage",n)
        }
    }
}
</script>
<style scoped lang="less">
    @import "~@/styles/var.less";
    @import "~@/styles/global.less";
    a{
        text-decoration: none;
        font-weight: 600;
        padding: 0 8px;
        color:@dark;
        white-space:nowrap ;
        cursor: pointer;
    }
    a.disabled{
        color: @gray;
        cursor: not-allowed;
    }
    a.active{
        color:@success;
    }
    .pager-container{
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
</style>