import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppRoutes } from "@skeleton/navigation/routes"
import ScreenA from "@skeleton/views/screenA"
import ScreenB from "@skeleton/views/screenB"
import { IHomeParamList } from "./types"

const HomeStack = createStackNavigator<IHomeParamList>()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={AppRoutes.ScreenA}
      headerMode="screen"
      screenOptions={{ headerTitle: "Home" }}>
      <HomeStack.Screen name={AppRoutes.ScreenA} component={ScreenA} />
      <HomeStack.Screen name={AppRoutes.ScreenB} component={ScreenB} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
