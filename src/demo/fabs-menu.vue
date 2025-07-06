<template>
  <md-fab-menu
    icon="settings"
    position="top-left"
    type="primary"
    size="large"
    v-model:menu-opened="isMenuOpened"
    :options="options"
  />
  <md-fab-menu
    icon="settings"
    position="top-right"
    type="tertiary"
    size="medium"
    v-model:menu-opened="isMenuOpened"
    :options="options"
  />
  <md-fab-menu
    icon="settings"
    position="bottom-left"
    type="secondary"
    size="small"
    v-model:menu-opened="isMenuOpened"
    :options="options"
  />
</template>

<script setup lang="ts">
  import MdFabMenu from "components/md-fab-menu.vue"
  import { ref } from "vue"
  import type { MdFabMenuOption } from "types/types.ts"

  const options = ref<MdFabMenuOption[]>([
    {
      key: "first_button",
      label: "Button",
      appendIcon: "progress-activity",
      eventHandler: () => alert("Button clicked"),
    },
    {
      key: "second_button",
      label: "Button 2",
      appendIcon: "progress-activity",
      preventClose: true,
      eventHandler: () => alert("Button 2 clicked"),
    },
  ])

  const isMenuOpened = ref(false)
</script>

<style scoped></style>
