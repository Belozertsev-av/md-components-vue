export { default as IconsPack } from "./icons.vue"

const icons = [
  "settings",
  "progress-activity",
  "close",
  "keyboard-arrow-down",
  "keyboard-arrow-up",
] as const
export type MdIconName = (typeof icons)[number]
