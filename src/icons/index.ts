export { default as IconsPack } from "./icons.vue"

const icons = ["settings", "progress-activity"] as const
export type MdIconName = (typeof icons)[number]
