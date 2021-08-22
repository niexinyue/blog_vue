<template>
  <div class="home-container" ref="liImg" 
  @mousewheel="handleWheel"
  v-loading="isloading">

    <ul :style="{marginTop}" class="carouse-container"
    @transitionend="handleTransitionEnd">
      <li v-for="i in data" :key = "i.id">
        <carouseItem :carouse="i"/>
      </li>
    </ul>
    <div class="upArrow arrow" v-show="index >= 1"
    @click="changeIndex(index-1)">
      <Icon ty="arrowUp"/>
    </div>
    <div class="downArrow arrow"
    @click="changeIndex(index+1)"
    v-show="index<=1">
      <Icon ty="arrowDown"/>
    </div>
    <ul class="cirs">
      <li v-for="(dat,i) in data" :key="i.id" 
      class="cir" 
      :class="{active:index === i}"
      @click="changeIndex(i)"></li>
    </ul>
  </div>
</template>

<script>
// import {getBanner} from "@/api/banner.js"
import carouseItem from "./carouseItem.vue"
import Icon from "@/components/icon"
import Loading from "@/directives/loading"
import {mapState} from "vuex"
// import webFetch from "@/mixins/webFetch.js"
export default {
  directives:{
    loading:Loading
  },
  created(){
      this.$store.dispatch("banner/fetchBanner")
  },
  components:{
    carouseItem,
    Icon,
  },
  data(){
    return {
      index:0,
      imgHight:0,
      isMove:false,
    }
  },
  methods:{
    fetchData(){
      return  getBanner()
    },
    show(){
      var n = document.querySelector(".vv")
      this.$showMessage({ message: "二个傻逼是覅的话i", type: "success", dom: this.$refs.tv })
      },
    changeIndex(n){
      if(n < 0 || n > this.data.length-1){
        console.log(this.data.length)
        return
      }
      this.index = n;
    },
    handleResize(){
      this.imgHight = this.$refs.liImg.clientHeight
    }, 
    handleWheel(e){
      if(this.isMove){
        return
      }
      if(e.deltaY > 18 && this.index != this.data.length - 1){
        this.isMove = true
        this.changeIndex(this.index + 1)
      }else if(e.deltaY < -18 && this.index != 0){
        this.isMove = true
        this.changeIndex(this.index - 1)
      }
    },
    handleTransitionEnd(){
      this.isMove = false
    }
  },
  computed:{
    marginTop(){
      return -this.index*this.imgHight + "px";
    },
    ...mapState('banner',["isloading","data"])
  },
  mounted(){
    this.imgHight = this.$refs.liImg.clientHeight
    addEventListener("resize",this.handleResize)
  },
  destroyed(){
    removeEventListener("resize",this.handleResize)
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.home-container{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  ul{
    margin: 0;
    list-style: none;
    padding: 0;
    transition: 500ms;
  }
  .arrow{
    font-size: 45px;
    color: @gray;
    opacity: 0.7;
    transition: 0.6s;
    display: inline-block;
    margin: 16px 0;
    &:hover{
      opacity: 1;
      transform: scale(1.1);
      cursor: pointer;
    }
    &.upArrow{
      position: absolute;
      top: 0;
      left: calc(50% - 23px);
    }
    &.downArrow{
      position: absolute;
      bottom: 0;
      left: calc(50% - 23px);
    }
  }
  .cirs{
    position: absolute;
    right: 10px;
    top: calc(50% - 35px);
    .cir{
      width: 6px;
      height: 6px;
      border: 2px solid #fff;
      border-radius: 50%;
      margin: 10px ;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
      }
      &.active{
        background-color: #ddd;
      }
    }
  }
  .carouse-container{
    width: 100%;
    height: 100%;
    li {
    width: 100%;
    height: 100%;
  }
  }
  .loading-container{
    width: 100px;
    height: 100px;
  }
}
</style>