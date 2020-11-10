import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"
import { AppRoutes } from "@skeleton/navigation/routes"

export type IHomeParamList = {
  [AppRoutes.ScreenA]: undefined
  [AppRoutes.ScreenB]: { counter: number }
}

export type IHomeNavigationProps<P, R extends keyof IHomeParamList> = P & {
  navigation: StackNavigationProp<IHomeParamList, R>
  router: RouteProp<IHomeParamList, R>
}
