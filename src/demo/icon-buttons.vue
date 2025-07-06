<template>
  <div class="list">
    <div class="row">
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="small"
        shape="square"
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="medium"
        shape="square"
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="large"
        shape="square"
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        size="medium"
        shape="square"
        icon="settings"
        disabled
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        size="medium"
        shape="square"
        icon="settings"
        loading
      >
        Button
      </md-icon-button>
    </div>
    <div class="row">
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="small"
        shape="round"
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        size="medium"
        icon="settings"
        shape="round"
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="large"
        shape="round"
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="medium"
        shape="round"
        disabled
      >
        Button
      </md-icon-button>
      <md-icon-button
        :variant="variant"
        icon="settings"
        size="medium"
        shape="round"
        loading
      >
        Button
      </md-icon-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MdIconButton from "components/md-icon-button.vue"
  import type { MdVariant } from "types/types.ts"

  defineProps<{
    variant: MdVariant
  }>()
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
