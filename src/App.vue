<template>
  <div id="app">
    <Layout>
        <template v-slot:left>
          <div class="left">
            <SiteAside/>
          </div>
        </template>
        <template v-slot:center>
            <div class="center">
                  <RouterView/>        
            </div>
        </template>  
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import Layout from '@/components/layout'
import SiteAside from "@/components/siteAside"
import ToTop from "@/components/toTop"
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/public.less";
#app{
  .self-filter(fixed);
}
.left{
  width: 250px;
  height: 100%;
}

</style>
