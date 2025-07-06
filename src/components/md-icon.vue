<template>
  <svg
    :class="[$attrs.class, name]"
    aria-hidden="true"
    :width="size"
    :height="size"
  >
    <use :href="iconHref" />
  </svg>
</template>

<script lang="ts" setup>
  import { computed } from "vue"
  import type { MdIconName } from "@/icons"

  const { name, size = 24 } = defineProps<{
    name: MdIconName
    size?: number | string
  }>()

  const iconHref = computed(() => `#icon-${name}`)
</script>

<style scoped>
  svg {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    stroke: currentColor;
  }
</style>
