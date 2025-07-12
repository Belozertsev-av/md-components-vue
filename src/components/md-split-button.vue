<template>
  <div :class="`md-split-button md-split-button-${arrowButtonPosition}`">
    <md-button
      :variant="variant"
      :disabled="mainButtonDisabled"
      :loading="mainButtonLoading"
      :prepend-icon="arrowButtonPosition === 'right' ? mainButtonIcon : undefined"
      :append-icon="arrowButtonPosition === 'left' ? mainButtonIcon : undefined"
      :class="`main-button main-button-${arrowButtonPosition}`"
      @click="emit('mainButtonClicked')"
    >
      {{ label }}
    </md-button>
    <md-icon-button
      :variant="variant"
      :disabled="arrowButtonDisabled"
      :loading="arrowButtonLoading"
      :class="`arrow-button arrow-button-${arrowButtonPosition}
      ${arrowButtonClicked ? 'arrow-clicked' : ''}`"
      icon="keyboard-arrow-down"
      @click="emit('update:arrowButtonClicked', !arrowButtonClicked)"
    />
  </div>
</template>

<script setup lang="ts">
  import MdButton from "components/md-button.vue"
  import MdIconButton from "components/md-icon-button.vue"
  import type { MdIconName } from "@/icons"
  import type { MdSplitButtonVariant } from "types/types.ts"
  import { DEFAULT_ARROW_BUTTON_POSITION, DEFAULT_VARIANT } from "types/constants.ts"

  const {
    arrowButtonPosition = DEFAULT_ARROW_BUTTON_POSITION,
    variant = DEFAULT_VARIANT,
    arrowButtonLoading = false,
    arrowButtonDisabled = false,
    mainButtonLoading = false,
    mainButtonDisabled = false,
  } = defineProps<{
    label: string
    arrowButtonClicked: boolean
    arrowButtonPosition?: "left" | "right"
    mainButtonIcon?: MdIconName
    variant?: MdSplitButtonVariant
    arrowButtonLoading?: boolean
    arrowButtonDisabled?: boolean
    mainButtonLoading?: boolean
    mainButtonDisabled?: boolean
  }>()

  const emit = defineEmits<{
    (e: "update:arrowButtonClicked", newValue: boolean): void
    (e: "mainButtonClicked"): void
  }>()
</script>

<style lang="scss">
  @use "styles/action-states" as util;

  .md-split-button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &-left {
      flex-direction: row-reverse;
    }
    &-right {
      flex-direction: row;
    }
  }

  .main-button {
    &-right,
    &-right:after {
      border-bottom-right-radius: var(--md-corner-small) !important;
      border-top-right-radius: var(--md-corner-small) !important;
    }

    &-right:hover:not(&:disabled, &.loading),
    &-right:hover:not(&:disabled, &.loading):after,
    &-right:active:not(&:disabled, &.loading),
    &-right:active:not(&:disabled, &.loading):after,
    &-right:focus:not(&:disabled, &.loading),
    &-right:focus:not(&:disabled, &.loading):after {
      border-bottom-right-radius: var(--md-corner-large) !important;
      border-top-right-radius: var(--md-corner-large) !important;
    }

    &-left,
    &-left:after {
      border-bottom-left-radius: var(--md-corner-small) !important;
      border-top-left-radius: var(--md-corner-small) !important;
    }

    &-left:hover:not(&:disabled, &.loading),
    &-left:hover:not(&:disabled, &.loading):after,
    &-left:active:not(&:disabled, &.loading),
    &-left:active:not(&:disabled, &.loading):after,
    &-left:focus:not(&:disabled, &.loading),
    &-left:focus:not(&:disabled, &.loading):after {
      border-bottom-left-radius: var(--md-corner-large) !important;
      border-top-left-radius: var(--md-corner-large) !important;
    }
  }

  .arrow-button {
    &-right,
    &-right:after {
      border-bottom-left-radius: var(--md-corner-small) !important;
      border-top-left-radius: var(--md-corner-small) !important;
    }
    &-left,
    &-left:after {
      border-bottom-right-radius: var(--md-corner-small) !important;
      border-top-right-radius: var(--md-corner-small) !important;
    }
  }

  .arrow-clicked {
    border-radius: var(--md-corner-full) !important;
    &:after {
      border-radius: var(--md-corner-full) !important;
    }

    svg {
      transform: rotate(180deg);
    }
  }
</style>
