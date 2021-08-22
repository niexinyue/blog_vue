<template>
    <nav class="menu-container">
        <RouterLink :to="{name:item.link}"
        v-for="item in items"
        :key="item.icon"
        active-class="isselected"
        :exact="item.exact">
            <div class="icon">
                <Icon :ty="item.icon"/>
            </div>
            <span>
                {{item.title}}
            </span>
        </RouterLink>
    </nav>
</template>

<script>
import Icon from "@/components/icon"
export default {
    components:{
        Icon
    },
    methods:{
        isselected(item){
            let link = item.link.toLowerCase();
            let currentLink = location.pathname.toLowerCase();
            if(item.startWith){
                return currentLink.startsWith(link)
            }else{
                return currentLink === link
            }   
        }
    },
    data(){
        return{
            items: [
            {
              link: "home",
              title: "首页",
              icon: "home",
              exact: true
            },
            {
              link: "blog",
              title: "文章",
              icon: "blog",
              startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
              exact: false
            },
            {
              link: "about",
              title: "关于我",
              icon: "about",
              exact: true
            },
            {
              link: "project",
              title: "项目&效果",
              icon: "code",
              exact: true
            },
            {
              link: "message",
              title: "留言板",
              icon: "chat",
              exact: true
            },
            ],
        };
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.menu-container{
    color: @gray;
    margin: 24px 0;
    a{
        padding: 0 50px;
        display: block;
        display: flex;
        align-items: center;
        height: 45px;
        &.isselected {
            background: darken(@words, 3%);
        }
        .icon {
            width: 24px;
        }
        &:hover {
            color: #fff;
        }
    }
}
</style>