import React, { Component } from "react"
import { Button, Text, View } from "react-native"
import { connect } from "react-redux"
import { AppRoutes } from "@skeleton/navigation/routes"
import { clickAction } from "@skeleton/state/ducks/home"
import { IHomeNavigationProps } from "@skeleton/navigation/types"
import { IAppState } from "@skeleton/state/types"
import { IEmpty } from "@skeleton/utils"
import styles from "./styles"
import { R } from "@skeleton/res"

interface IScreenAProps {
  counter: number
  clickButton: () => {}
}

type IScreenAState = IEmpty

class ScreenA extends Component<
  IHomeNavigationProps<IScreenAProps, AppRoutes.ScreenA>,
  IScreenAState
> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{R.strings.screenA.welcome}</Text>
        <Text style={styles.text}>{this.props.counter}</Text>
        <Button title={R.strings.screenA.increment} onPress={this.props.clickButton} />
        <Button title={R.strings.screenA.goToScreenB} onPress={this.navigateToScreenB} />
      </View>
    )
  }

  private navigateToScreenB = () => this.props.navigation.navigate(AppRoutes.ScreenB)
}

const mapStateToProps = ({ home }: IAppState) => ({
  counter: home.counter,
})

const mapDispatchToProps = (dispatch) => ({
  clickButton: () => dispatch(clickAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenA)
