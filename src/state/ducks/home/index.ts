import { put, takeLatest } from "redux-saga/effects"
import { HomeActionType, IIncrementAction, IClickBtnAction, IHomeState, IHomeAction } from "./types"

// Action Creators
export const clickAction = (): IClickBtnAction => ({
  type: HomeActionType.ClickBtn,
})

export const incrementAction = (count = 1): IIncrementAction => ({
  type: HomeActionType.Increment,
  payload: {
    count,
  },
})

// Reducer
const initialState: IHomeState = {
  counter: 0,
}

export const homeReducer = function(
  state: IHomeState = initialState,
  action: IHomeAction
): IHomeState {
  switch (action.type) {
    case HomeActionType.Increment:
      return { counter: state.counter + action.payload.count }
    default:
      return state
  }
}

// Sagas
function* clickButton() {
  yield put(incrementAction())
}

export function* homeSubscription() {
  yield takeLatest(HomeActionType.ClickBtn, clickButton)
}
