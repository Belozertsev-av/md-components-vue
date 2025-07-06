<template>
  <teleport :to="teleportTo">
    <div
      class="md-fab-menu-container"
      :class="position"
    >
      <transition name="fade-list">
        <ul
          v-if="menuOpened"
          :class="`md-fab-menu md-fab-menu-${position}`"
        >
          <li
            v-for="option in options"
            :key="option.key"
          >
            <md-button
              :class="`md-fab ${type}-button`"
              :prepend-icon="option.prependIcon"
              :append-icon="option.appendIcon"
              :disabled="option.disabled"
              :loading="option.loading"
              variant="tonal"
              @click="onItemClick(option)"
            >
              {{ option.label }}
            </md-button>
          </li>
        </ul>
      </transition>
      <md-icon-button
        :class="`md-fab ${type}-button`"
        :shape="menuOpened ? 'round' : 'rounded-square'"
        :variant="menuOpened ? 'filled' : 'tonal'"
        :icon="menuOpened ? 'close' : icon"
        :size="size"
        :loading="loading"
        :disabled="disabled"
        @click="onClick"
      />
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import type { MdFabMenuOption, MdFabPosition, MdFabType, MdSize } from "types/types.ts"
  import { DEFAULT_SIZE, DEFAULT_FAB_TYPE, DEFAULT_FAB_POSITION } from "types/constants.ts"
  import MdIconButton from "components/md-icon-button.vue"
  import type { MdIconName } from "@/icons"
  import MdButton from "components/md-button.vue"

  const {
    size = DEFAULT_SIZE,
    type = DEFAULT_FAB_TYPE,
    position = DEFAULT_FAB_POSITION,
    disabled = false,
    loading = false,
    teleportTo = "#app",
    menuOpened,
  } = defineProps<{
    icon: MdIconName
    options: MdFabMenuOption[]
    menuOpened: boolean
    teleportTo?: string
    position?: MdFabPosition
    size?: MdSize
    type?: MdFabType
    disabled?: boolean
    loading?: boolean
  }>()

  const emit = defineEmits<{
    (e: "click", event: MouseEvent): void
    (e: "itemClick", event: MouseEvent): void
    (e: "update:menuOpened", newValue: boolean): void
  }>()

  const onClick = (): void => {
    emit("update:menuOpened", !menuOpened)
  }

  const onItemClick = (option: MdFabMenuOption): void => {
    if (option.eventHandler) {
      if (!option.preventClose) {
        emit("update:menuOpened", !menuOpened)
      }
      option.eventHandler()
    }
  }
</script>

<style lang="scss">
  @use "styles/modules/button" as *;
  @use "styles/modules/fab" as *;
</style>
