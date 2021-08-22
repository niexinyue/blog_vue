<template>
    <div class="carouse-container" ref="view"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave">
        <div class="carouse-img" ref="img"
        :style="imgPosition">
            <imageLoader :src="carouse.bigImg" 
            :placeholder="carouse.midImg" 
            @loadSuccess="this.textShow"/>
        </div>
        <h2 class="text title" ref="title">{{carouse.title}}</h2>
        <p class="text des" ref="des">{{carouse.description}}</p>
    </div>
</template>
<script>
import imageLoader from "@/components/imageLoader"
export default {
    components:{
        imageLoader
    },
    props:["carouse"],
    data(){
        return {
            mouseX:0,
            mouseY:0,
            outerSize:null,
            innerSize:null,
            titleW:0,
            desW:0
        }
    },
    mounted(){
        this.titleW = this.$refs.title.clientWidth;
        this.desW = this.$refs.des.clientWidth;
        this.reSetSize()
        this.mouseX = this.center.x;
        this.mouseY = this.center.y
        window.addEventListener("resize",this.reSetSize)
    },
    destroyed(){
        window.removeEventListener("resize",this.reSetSize)
    },
    methods:{
        reSetSize(){
            this.outerSize = {
                width : this.$refs.view.clientWidth,
                height : this.$refs.view.clientHeight,
            }
            this.innerSize = {
                width :this.$refs.img.clientWidth,
                height :this.$refs.img.clientHeight,
            }
        },
        handleMouseMove(e){
            const rect = this.$refs.view.getBoundingClientRect()
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave(){
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
        textShow(){
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
            this.$refs.title.clientWidth; // reflow
            this.$refs.title.style.transition = "1s";
            this.$refs.title.style.width = this.titleW + "px";

      // 描述也是一样
            this.$refs.des.style.opacity = 1;
            this.$refs.des.style.width = 0;
      // 强制让浏览器渲染一次
            this.$refs.des.clientWidth; // reflow
            this.$refs.des.style.transition = "2s 1s";
            this.$refs.des.style.width = this.desW + "px";
        }
    },
    computed:{
        imgPosition(){
            if(!this.innerSize || !this.outerSize){
                return
            }
            
            const extraWidth = this.outerSize.width - this.innerSize.width;
            const extraHeight = this.outerSize.height - this.innerSize.height;
            const x = (extraWidth/this.outerSize.width)*this.mouseX;
            const y = (extraHeight/this.outerSize.height)*this.mouseY;
            return {
                transform:`translate(${x}px,${y}px)`
            }
        },
        center(){
            return {
                x: this.outerSize.width / 2,
                y: this.outerSize.height / 2
            }
        }
    }
}
</script>
<style lang="less" scoped>
.carouse-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .text{
        position: absolute;
        top: 70%;
        left: 10%;
        letter-spacing: 3px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5),-1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        overflow: hidden;
        opacity: 0;
        &.title{
            font-size: 2em;
        }
        &.des{
            transform: translateY(3em);
        }
    }
}
.carouse-img{
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
}
</style>