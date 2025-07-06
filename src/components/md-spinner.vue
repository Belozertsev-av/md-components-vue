<template>
  <md-icon
    name="progress-activity"
    :size="size"
    class="spinner"
    :style="`--speed: ${speed}s;`"
  />
</template>

<script setup lang="ts">
  import MdIcon from "./md-icon.vue"

  const { size = 24, speed = 1 } = defineProps<{
    size?: number | string
    speed?: number
  }>()
</script>

<style scoped>
  .spinner {
    display: inline-flex;
    animation: spin var(--speed) cubic-bezier(0.5, 0.8, 0.4, 0.7) infinite;
    transform-origin: center;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
