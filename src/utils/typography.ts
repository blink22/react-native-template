import { TextStyle } from "react-native"

export function fontSizing(size: number, spacing: number, height: number): TextStyle {
  return {
    fontSize: size,
    letterSpacing: spacing,
    lineHeight: height,
  }
}
