import React, { Component } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { connect } from "react-redux"
import { IAppState } from "@skeleton/state/types"
import AuthNavigator from "@skeleton/navigation/authNavigator"
import HomeNavigator from "@skeleton/navigation/homeNavigator"
import NavigationService from "@skeleton/navigation/navigationService"

interface IAppNavigatorProps {
  token?: string
}

class AppNavigator extends Component<IAppNavigatorProps> {
  public render() {
    const { token } = this.props
    return (
      <NavigationContainer
        ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}>
        {token ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    )
  }
}

const mapStateToProps = ({ auth }: IAppState) => ({
  token: auth.authToken,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigator)
