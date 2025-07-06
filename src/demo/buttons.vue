<template>
  <div class="list">
    <div class="row">
      <md-button
        :variant="variant"
        size="small"
        shape="square"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="square"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="large"
        shape="square"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="square"
        disabled
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="square"
        loading
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="square"
        append-icon="settings"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="square"
        prepend-icon="settings"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="square"
        append-icon="settings"
        prepend-icon="settings"
      >
        Button
      </md-button>
    </div>
    <div class="row">
      <md-button
        :variant="variant"
        size="small"
        shape="round"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="round"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="large"
        shape="round"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="round"
        disabled
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="round"
        loading
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="round"
        append-icon="settings"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="round"
        prepend-icon="settings"
      >
        Button
      </md-button>
      <md-button
        :variant="variant"
        size="medium"
        shape="round"
        append-icon="settings"
        prepend-icon="settings"
      >
        Button
      </md-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MdButton from "components/md-button.vue"
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
