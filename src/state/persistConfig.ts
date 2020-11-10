import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import { PersistConfig } from "redux-persist"
import { AppStorage } from "@skeleton/services/storage"
import { IScreenState, ReducerType } from "./types"

const persistConfig: PersistConfig<IScreenState> = {
  key: ReducerType.Root,
  storage: AppStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: [ReducerType.Auth],
}

export default persistConfig
