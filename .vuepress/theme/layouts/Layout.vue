<script setup>
import Languages from '../../../Languages.md'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <Languages/>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  padding: 20px;
  /* text-align: center; */
}
</style>
