import React, { Component } from "react"
import { Button, View, Alert } from "react-native"
import { connect } from "react-redux"
import { AppRoutes } from "@skeleton/navigation"
import { IAuthNavigationProps } from "@skeleton/navigation/types"
import { R } from "@skeleton/res"
import { IEmpty } from "@skeleton/utils"
import { Input } from "@skeleton-ui/Input"
import styles from "./styles"

type IForgetPasswordProps = IEmpty
type IForgetPasswordState = IEmpty

class Login extends Component<
  IAuthNavigationProps<IForgetPasswordProps, AppRoutes.ForgetPassword>,
  IForgetPasswordState
> {
  public render() {
    return (
      <View style={styles.container}>
        <Input
          containerStyle={styles.emailContainer}
          label={R.strings.forgetPassword.emailAddress}
          placeholder={R.strings.forgetPassword.emailAddress}
        />
        <Button
          title={R.strings.forgetPassword.resetPassword}
          onPress={() => {
            Alert.alert("forget password clicked")
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
