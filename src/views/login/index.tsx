import React, { Component } from "react"
import { Button, View } from "react-native"
import { connect } from "react-redux"
import { IAuthNavigationProps } from "@skeleton/navigation/types"
import { AppRoutes } from "@skeleton/navigation/routes"
import { loginAction } from "@skeleton/state/ducks"
import { R } from "@skeleton/res"
import { IEmpty } from "@skeleton/utils"
import { Input } from "@skeleton-ui/Input"
import styles from "./styles"

interface ILoginProps {
  login: () => void
}

type ILoginState = IEmpty

enum UserCredential {
  Email,
  Password,
}

class Login extends Component<IAuthNavigationProps<ILoginProps, AppRoutes.Login>, ILoginState> {
  public render() {
    return (
      <View style={styles.container}>
        {this.renderCredentialInput(UserCredential.Email)}
        {this.renderCredentialInput(UserCredential.Password)}
        <Button title={R.strings.login.login} onPress={this.props.login} />
        <Button
          title={R.strings.login.forgetPassword}
          onPress={() => this.props.navigation.navigate(AppRoutes.ForgetPassword)}
        />
      </View>
    )
  }

  private renderCredentialInput(type: UserCredential) {
    const label =
      type === UserCredential.Email ? R.strings.login.emailAddress : R.strings.login.password
    const placeholder =
      type === UserCredential.Email ? R.strings.login.emailPlaceholder : R.strings.login.password

    return (
      <Input containerStyle={styles.credentialContainer} label={label} placeholder={placeholder} />
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
