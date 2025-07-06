<template>
  <icons />
  <fabs-menu />
</template>
<script setup lang="ts">
  import Icons from "./icons/icons.vue"
  import FabsMenu from "@/demo/fabs-menu.vue"
</script>

<style lang="scss" scoped>
  .list {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
