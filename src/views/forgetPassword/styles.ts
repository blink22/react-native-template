import { StyleSheet } from "react-native"
import { ViewStyleSheet, TextStyleSheet } from "@skeleton/utils/types"
import { R } from "@skeleton/res"
import { wp, hp } from "@skeleton/utils"

const viewStyles = ViewStyleSheet({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emailContainer: {
    marginHorizontal: wp(10),
    marginVertical: hp(10),
  },
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
