import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { IAuthParamList } from "./types"
import { AppRoutes } from "@skeleton/navigation/routes"
import Login from "@skeleton/views/login"
import ForgetPassword from "@skeleton/views/forgetPassword"

const AuthStack = createStackNavigator<IAuthParamList>()

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={AppRoutes.Login} mode="card">
      <AuthStack.Screen name={AppRoutes.Login} component={Login} options={{ headerShown: false }} />
      <AuthStack.Screen
        name={AppRoutes.ForgetPassword}
        component={ForgetPassword}
        options={{ title: "Forget Password" }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
