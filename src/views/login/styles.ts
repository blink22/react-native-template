import { StyleSheet } from "react-native"
import { ViewStyleSheet } from "@skeleton/utils"
import { R } from "@skeleton/res"

const viewStyles = ViewStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  credentialContainer: {
    margin: 10,
  },
})

const styles = StyleSheet.create({
  ...viewStyles,
})

export default styles
