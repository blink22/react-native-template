import { FSA, FSAWithPayload } from "flux-standard-action"

// Action Types must be prefixed by screen name
// to guarantee uniqueness
export enum HomeActionType {
  ClickBtn = "Home/clickBtn",
  Increment = "Home/increment",
}

export type IClickBtnAction = FSA<HomeActionType.ClickBtn>

export type IIncrementAction = FSAWithPayload<
  HomeActionType.Increment,
  {
    count: number
  }
>

export type IHomeAction = IClickBtnAction | IIncrementAction

export interface IHomeState {
  counter: number
}
