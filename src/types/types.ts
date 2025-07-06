import type { MdIconName } from "@/icons"

export type MdVariant = "elevated" | "filled" | "tonal" | "outlined" | "text"

export type MdFabVariant = "tonal" | "filled"

export type MdFabType = "primary" | "secondary" | "tertiary"

export type MdFabPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left"

export type MdSize = "small" | "medium" | "large"

export type MdShape = "round" | "rounded-square" | "square"

export interface MdFabMenuOption {
  key: string
  label: string
  preventClose?: boolean
  eventHandler?: () => any | void
  prependIcon?: MdIconName
  appendIcon?: MdIconName
  loading?: boolean
  disabled?: boolean
}
