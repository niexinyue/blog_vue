<template>
    <div v-Loading="loading || !isloaded" class="about-container">
      <iframe :src="data" frameborder="0"
      v-if="data"
      @load="isloaded = true"></iframe>
    </div>
</template>

<script>
import {mapState} from "vuex";
import isloading from "@/directives/loading.js"
export default {
    data(){
        return{
            isloaded:false
        }
    },
    directives:{
        Loading:isloading
    },
    computed:{
        ...mapState("about",["data","loading"])
    },
    methods:{
    }
};
</script>

<style>
.about-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
iframe{
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
}
</style>