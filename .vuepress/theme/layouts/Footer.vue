<template>
  <Layout>
    <template #page-bottom>
      <div class="theme-default-content" v-html="Footer"></div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Footer from '../../../Footer.md'
export default {
  components: {
    Layout,
  },
  data() {
    return {
      Footer
    }
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
