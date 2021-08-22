<template>
    <ul class="contact-container">
        <li>
            <a :href="data.github" target="_blank">
                <div class="icon">
                    <Icon ty="github"/>
                </div>
                <span>{{data.githubName}}</span>
            </a>
        </li>
        <li>
            <a :href='`mailto:${data.mail}`'>
                <div class="icon">
                    <Icon ty="mail"/>
                </div>
                <span>{{data.mail}}</span>
            </a>
        </li>
        <li>
            <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
                <div class="icon">
                    <Icon ty="qq"/>
                </div>
                <span>{{data.qq}}</span>
            </a>
            <div class="pop">
                <img :src="data.qqQrCode" alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon ty="weixin"/>
                </div>
                <span>xq_150</span>
            </a>
            <div class="pop">
                <img :src="data.weixinQrCode" alt="">
            </div>
        </li>        
    </ul>
</template>
<script>
import Icon from "@/components/icon"
import {mapState} from "vuex"
export default {
    components:{
        Icon
    },
    computed:{
        ...mapState("sett",["data"])
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/global.less";
.contact-container{
    padding: 20px;
    margin: 0;
    color: @gray;
    list-style: none;
    @lihight:30px;
    li{
        height: @lihight;
        line-height: @lihight;
        margin: 14px 0;
        position: relative;
        &:hover{
        .pop{
            transform: scaleY(1);
        }
    }
    }
    a {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .icon {
        font-size: 26px;
        width: 36px;
        &.weixin {
            font-size: 32px;
            text-indent: -3px;
        }
    }
    .pop{
        position: absolute;
        left: 0;
        bottom: @lihight + 3px;
        padding: 10px 15px;
        background: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;
        img {
            width: 150px;
            height: 150px;
        }
        &::after{
            content: "";
            background-color: #fff;
            width: 10px;
            height: 10px;
            position: absolute;
            left: 50%;
            bottom: -5px;
            transform: translateX(-5px) rotate(45deg);
        }
    }

}
</style>