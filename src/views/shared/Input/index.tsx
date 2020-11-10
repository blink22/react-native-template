import React from "react"
import { View, Text, Image, ViewStyle } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { R } from "@skeleton/res"
import styles from "./styles"

interface IInputProps {
  label: string
  placeholder: string
  errorMessage?: string
  containerStyle?: ViewStyle
}

export const Input = (props: IInputProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.textLabel}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={R.images.reactNativeLogo} />
        <TextInput style={styles.textInput} placeholder={props.placeholder} />
      </View>
      <View style={styles.separator} />
      <Text style={styles.errorText}>{props.errorMessage}</Text>
    </View>
  )
}
