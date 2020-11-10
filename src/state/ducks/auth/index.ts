import { IAuthState, IAuthAction, AuthActionType, ILoginAction } from "./types"

// Action Creators
export const loginAction = (): ILoginAction => ({
  type: AuthActionType.Login,
})

// Reducer
const initialState: IAuthState = {}

export const authReducer = function(
  state: IAuthState = initialState,
  action: IAuthAction
): IAuthState {
  switch (action.type) {
    case AuthActionType.Login:
      return { authToken: "token" }
    default:
      return state
  }
}
