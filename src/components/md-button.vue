<template>
  <button
    v-bind="$attrs"
    :class="`md-button ${variant} ${size}-button ${shape}-button md-text-body-${size} ${loading ? 'loading' : ''}`"
    :disabled="disabled"
  >
    <template v-if="loading">
      <md-spinner :class="`${size}-spinner`" />
    </template>

    <template v-else>
      <md-icon
        v-if="prependIcon"
        :name="prependIcon"
      />
      <slot />
      <md-icon
        v-if="appendIcon"
        :name="appendIcon"
      />
    </template>
  </button>
</template>

<script setup lang="ts">
  import { DEFAULT_SHAPE, DEFAULT_SIZE, DEFAULT_VARIANT } from "../types/constants"
  import type { MdShape, MdSize, MdVariant } from "../types/types.ts"
  import type { MdIconName } from "@/icons"
  import MdSpinner from "./md-spinner.vue"
  import MdIcon from "./md-icon.vue"

  const {
    variant = DEFAULT_VARIANT,
    size = DEFAULT_SIZE,
    shape = DEFAULT_SHAPE,
    disabled = false,
    loading = false,
  } = defineProps<{
    variant?: MdVariant
    size?: MdSize
    shape?: MdShape
    disabled?: boolean
    loading?: boolean
    prependIcon?: MdIconName
    appendIcon?: MdIconName
  }>()
</script>
