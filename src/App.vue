<template>
  <icons />
  <buttons variant="elevated" />
  <buttons variant="filled" />
  <buttons variant="tonal" />
  <buttons variant="text" />
  <buttons variant="outlined" />
</template>
<script setup lang="ts">
  import Icons from "./icons/icons.vue"
  import Buttons from "@/demo/buttons.vue"
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
