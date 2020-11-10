import { NavigationContainerRef, StackActions } from "@react-navigation/native"
import AppRoute from "./routes"
import { IAppParamList } from "./types"

type INavigator = NavigationContainerRef | null

class NavigationService {
  private _navigator: INavigator

  public constructor() {
    this._navigator = null
  }

  public setTopLevelNavigator(navigator: INavigator): void {
    this._navigator = navigator
  }

  protected get navigator() {
    return this._navigator
  }
  public navigate<R extends AppRoute>(routeName: R, params?: IAppParamList[R]) {
    this.navigator && this.navigator.navigate({ name: routeName, params })
  }

  public goBack() {
    this.navigator && this.navigator.goBack()
  }

  public push<R extends AppRoute>(routeName: R, params?: IAppParamList[R]) {
    this.navigator && this.navigator.dispatch(StackActions.push(routeName, params))
  }

  public pop(numberOfScreens = 0) {
    this.navigator && this.navigator.dispatch(StackActions.pop(numberOfScreens))
  }

  public replace<R extends AppRoute>(routeName: R, params?: IAppParamList[R]) {
    this.navigator && this.navigator.replace(routeName, params)
  }
}

export default new NavigationService()
