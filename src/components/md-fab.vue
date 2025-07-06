<template>
  <teleport :to="teleportTo">
    <div :class="position">
      <md-icon-button
        v-if="!label"
        :class="`md-fab ${type}-button`"
        shape="rounded-square"
        :variant="variant"
        :icon="icon"
        :size="size"
        :loading="loading"
        :disabled="disabled"
        @click="onClick"
      />
      <md-button
        v-else
        :class="`md-fab ${type}-button`"
        shape="rounded-square"
        :variant="variant"
        :prepend-icon="icon"
        :size="size"
        :loading="loading"
        :disabled="disabled"
        @click="onClick"
      >
        <span v-if="!custom">{{ label }}</span>
        <slot v-else />
      </md-button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import type { MdFabPosition, MdFabType, MdFabVariant, MdSize } from "types/types.ts"
  import {
    DEFAULT_SIZE,
    DEFAULT_VARIANT,
    DEFAULT_FAB_TYPE,
    DEFAULT_FAB_POSITION,
  } from "types/constants.ts"
  import MdIconButton from "components/md-icon-button.vue"
  import type { MdIconName } from "@/icons"
  import MdButton from "components/md-button.vue"

  const {
    size = DEFAULT_SIZE,
    variant = DEFAULT_VARIANT,
    type = DEFAULT_FAB_TYPE,
    position = DEFAULT_FAB_POSITION,
    disabled = false,
    loading = false,
    teleportTo = "#app",
    custom = false,
  } = defineProps<{
    icon: MdIconName
    custom?: boolean
    label?: string
    teleportTo?: string
    position?: MdFabPosition
    size?: MdSize
    variant?: MdFabVariant
    type?: MdFabType
    disabled?: boolean
    loading?: boolean
  }>()

  const emit = defineEmits<{
    (e: "click", event: MouseEvent): void
  }>()

  const onClick = (event: MouseEvent): void => {
    emit("click", event)
  }
</script>

<style lang="scss">
  @use "styles/modules/button" as *;
  @use "styles/modules/fab" as *;
</style>
