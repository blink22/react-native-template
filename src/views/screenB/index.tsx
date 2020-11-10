import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import { IEmpty } from "@skeleton/utils/types"
import { IHomeNavigationProps } from "@skeleton/navigation/types"
import { AppRoutes } from "@skeleton/navigation/routes"
import styles from "./styles"
import { R } from "@skeleton/res"

type IScreenBProps = IEmpty

type IScreenBState = IEmpty

class ScreenB extends Component<
  IHomeNavigationProps<IScreenBProps, AppRoutes.ScreenB>,
  IScreenBState
> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{R.strings.screenB.welcome}</Text>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenB)
