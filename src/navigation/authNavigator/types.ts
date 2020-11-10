import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { AppRoutes } from "@skeleton/navigation/routes"

export type IAuthParamList = {
  [AppRoutes.Login]: undefined
  [AppRoutes.ForgetPassword]: undefined
}

export type IAuthNavigationProps<P, R extends keyof IAuthParamList> = P & {
  navigation: StackNavigationProp<IAuthParamList, R>
  route: RouteProp<IAuthParamList, R>
}
