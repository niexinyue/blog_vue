<template>
  <Layout>
    <template v-slot:center>
      <div class="center">
        <BlogList/>
      </div>
    </template>
    <template v-slot:right>
      <div class="right">
        <BlogCategory/>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layout";
import BlogCategory from "./components/blogCategory.vue";
import BlogList from "./components/blogList.vue";

export default {
  components:{
    Layout,
    BlogCategory,
    BlogList,
  },
};
</script>

<style lang="less" scoped>
.right{
  height: 100%;
}
</style>