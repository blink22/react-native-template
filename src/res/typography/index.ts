import { TextStyle } from "react-native"
import { TextStyleSheet, fontSizing } from "@skeleton/utils"

const h0: TextStyle = {
  ...fontSizing(48, -0.7, 54),
}

const typorgraphy = {
  core: TextStyleSheet({
    h0,
  }),
}

export default typorgraphy
