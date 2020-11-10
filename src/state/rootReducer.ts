import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import rootPersistConfig from "./persistConfig"
import reducers from "./reducers"

const rootReducer = combineReducers(reducers)

export default persistReducer(rootPersistConfig, rootReducer)
