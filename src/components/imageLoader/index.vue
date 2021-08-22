<template>
    <div class="imageLoader-container">
       <img :src="src" alt="" class="src"
       @load="load"
       :style="{
           opacity: srcOpacity,
           transition: `${duration}ms`
           }">
       <img :src="placeholder" alt="" class="placeholder"
       v-if="!isLoaded">
    </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            default:2000
        }
    },
    methods:{
        load(){
            this.isOk = true
            setInterval(()=>{
                this.isLoaded = true
            },this.duration / 3)
            this.$emit("loadSuccess")
        }
    },
    data(){
        return{
            isLoaded:false,
            isOk : false
        }
    },
    computed:{
        srcOpacity(){
            return this.isOk ? 1 : 0
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/public.less";
.imageLoader-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img{
        .self-filter();
        object-fit: cover; 
    }
    .placeholder{
        filter: blur(2vw);
    }
}
</style>