import { StyleSheet } from "react-native"
import { ViewStyleSheet, TextStyleSheet } from "@skeleton/utils"

const viewStyles = ViewStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {},
})

const textStyles = TextStyleSheet({
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
})

const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
})

export default styles
