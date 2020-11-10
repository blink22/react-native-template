import { IAuthParamList } from "@skeleton/navigation/authNavigator/types"
import { IHomeParamList } from "@skeleton/navigation/homeNavigator/types"

export interface IAppNavigatorProps {
  token?: string
}

export type IAppParamList = IAuthParamList & IHomeParamList
