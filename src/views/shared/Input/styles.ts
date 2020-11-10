import { StyleSheet } from "react-native"
import { ViewStyleSheet, TextStyleSheet, ImageStyleSheet } from "@skeleton/utils"

const viewStyles = ViewStyleSheet({
  container: {
    height: 80,
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF",
  },
  inputContainer: {
    flexDirection: "row",
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
  },
})

const textStyles = TextStyleSheet({
  textLabel: {
    fontSize: 30,
    color: "black",
    textAlign: "left",
    marginVertical: 5,
  },
  textInput: {
    marginLeft: 5,
    flex: 1,
    fontSize: 25,
  },
  errorText: {
    color: "red",
    fontSize: 10,
    textAlign: "left",
    margin: 5,
  },
})

const imageStyles = ImageStyleSheet({
  icon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
})
const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
})

export default styles
