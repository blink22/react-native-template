import { FSA } from "flux-standard-action"

// Action Types must be prefixed by screen name
// to guarantee uniqueness
export enum AuthActionType {
  Login = "auth/login",
}

export type ILoginAction = FSA<AuthActionType.Login>

export type IAuthAction = ILoginAction

export interface IAuthState {
  authToken?: string
}
