<template>
  <icons />
  <div style="display: flex; gap: 0.5rem; margin: 2rem">
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      variant="filled"
      main-button-icon="settings"
      arrow-button-position="left"
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      variant="elevated"
      main-button-icon="settings"
      arrow-button-position="right"
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      variant="tonal"
      main-button-icon="settings"
      arrow-button-position="left"
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      variant="outlined"
      main-button-icon="settings"
      arrow-button-position="right"
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      main-button-icon="settings"
      arrow-button-position="right"
      main-button-disabled
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      main-button-icon="settings"
      arrow-button-position="right"
      main-button-loading
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      main-button-icon="settings"
      arrow-button-position="right"
      arrow-button-disabled
    />
    <md-split-button
      v-model:arrow-button-clicked="isArrowButtonClicked"
      label="label"
      main-button-icon="settings"
      arrow-button-position="right"
      arrow-button-loading
    />
  </div>
</template>
<script setup lang="ts">
  import Icons from "./icons/icons.vue"
  import MdSplitButton from "components/md-split-button.vue"
  import { ref } from "vue"

  const isArrowButtonClicked = ref(false)
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
