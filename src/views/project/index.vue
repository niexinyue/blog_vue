<template>
  <div class="project-container" v-loading="loading" ref="projectContainer">
      <div class="project-item"
      v-for="item in data" :key="item.id">
          <a :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
          :target="item.url ? '_blank' : '_self'">
              <img class="thumb" alt="" v-lazy="item.thumb">
          </a>
          <div class="info">
              <div  class="title">
                  <a 
                  :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
                  :target="item.url ? '_blank' : '_self'">{{item.name}}</a>
                  <a 
                  :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
                  :target="item.url ? '_blank' : '_self'"
                   class="github">github</a>
              </div>
                <p v-for="(va,i) in item.description" :key="i">{{va}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import mainScroll from "@/mixins/mainScroll"
export default {
    mixins:[mainScroll("projectContainer")],
    computed:{
        ...mapState("project",["data","loading"])
    },
    created(){
        this.$store.dispatch("project/fetchProject")
    },
    methods:{
    }
};
</script>

<style lang='less' scoped>
.project-container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    scroll-behavior: smooth;
    position: relative;
}
.project-item{
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    &:hover {
        box-shadow: -1px 1px 5px #000;
        transform: scale(1.01) translate(3px, -3px);
        color: inherit;
    }
    .thumb {
        width: 250px;
        min-height: 150px;
        flex: 0 0 auto;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
    }
    .info {
        line-height: 1.7em;
        flex: 1 1 auto;
        min-width: 200px;
        .title{
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 16px;
            .github{
                font-size: 12px;
                color: blue;
                margin-left: 20px;
                &:hover{
                    color: #f40;
                }
            }
        }
    }
}
</style>