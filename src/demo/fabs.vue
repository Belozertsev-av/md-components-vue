<template>
  <md-fab
    icon="settings"
    size="small"
    :label="label"
    :type="type"
    :variant="variant"
    position="bottom-left"
  />
  <md-fab
    icon="settings"
    size="medium"
    :label="label"
    :type="type"
    :variant="variant"
    position="bottom-right"
  />
  <md-fab
    icon="settings"
    size="large"
    :label="label"
    :type="type"
    :variant="variant"
    loading
    position="top-left"
  />
  <md-fab
    icon="settings"
    size="large"
    :label="label"
    :type="type"
    :variant="variant"
    disabled
    position="top-right"
  />
</template>

<script setup lang="ts">
  import type { MdFabType, MdFabVariant } from "types/types.ts"
  import MdFab from "components/md-fab.vue"

  defineProps<{
    type: MdFabType
    variant: MdFabVariant
    label?: string
  }>()
</script>
