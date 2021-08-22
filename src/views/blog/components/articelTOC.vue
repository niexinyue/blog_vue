<template>
    <div class="blog-aticle-TOC">
        <h2 v-show="data">文章目录</h2>
        <RightList :list="addActiveToData"
        @select="handleClick"/>
    </div>
</template>
<script>
import RightList from "./rigthList.vue";
import deBounce from "@/utils/debounce.js"
import "@/eventBus.js"
export default {
    components:{
        RightList
    },
    props:{
        data:{
            type:Array
        }
    },
    data(){
        return {
            isActiveDom:"article-md-title-1"
        }
    },
    methods:{
        handleClick(n){
            this.isActiveDom = n.anchor
            location.hash = n.anchor;
        },
        setActiveDom(){
            const range = 200;
            if(!this.getDoms){
                return
            }
            this.isActiveDom = ""
            for(const i of this.getDoms){
                const top = i.getBoundingClientRect().top;
                if(top < range && top > 0){
                    this.isActiveDom = i.id;
                    return
                }else if(top > range){
                    return
                }else{
                    this.isActiveDom = i.id
                }
            }
        }
    },
    created(){
        this.temp = deBounce(this.setActiveDom);
        this.$bus.$on("mainScroll",this.temp)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.temp)
    },
    computed:{
        addActiveToData(){
            const getTOC = (arr = [])=>{
                return arr.map((i)=>({
                    ...i,
                    isSelect: i.anchor === this.isActiveDom,
                    children: getTOC(i.children),
                }))       
            }
            return getTOC(this.data)
        },
        getDoms(){
            let arr=[];
            const addDoms = (toc)=>{
                for(const i of toc){
                    arr.push(document.getElementById(i.anchor))
                    if(i.children && i.children.length){
                        addDoms(i.children)
                    }
                }
            }
            addDoms(this.data)
            return arr;
        }
    }
}
</script>
<style lang="less" scoped>
h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
}
</style>