import { authReducer, homeReducer } from "./ducks"
import { ReducerType } from "./types"

const reducers = {
  [ReducerType.Auth]: authReducer,
  [ReducerType.Home]: homeReducer,
} as const

export default reducers
