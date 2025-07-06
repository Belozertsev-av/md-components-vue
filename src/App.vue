<template>
  <icons />
  <fabs
    variant="tonal"
    type="tertiary"
  />
</template>
<script setup lang="ts">
  import Icons from "./icons/icons.vue"
  import Fabs from "@/demo/fabs.vue"
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
