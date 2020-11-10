import Logger from "redux-logger"
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { configureStore, Middleware } from "@reduxjs/toolkit"
import Reactotron from "@skeleton/services/reactotron"
import { IS_DEV_ENV } from "@skeleton/utils"
import initialState from "./initialState"
import appReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const configureAppStore = () => {
  // Reactotron & Saga configuration
  const sagaMonitor = Reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const loggerMiddleware: Middleware = Logger

  const appStore = configureStore({
    reducer: appReducer,
    middleware: IS_DEV_ENV ? [sagaMiddleware, loggerMiddleware] : [sagaMiddleware],
    devTools: false,
    preloadedState: initialState,
    enhancers: [Reactotron.createEnhancer()],
  })

  sagaMiddleware.run(rootSaga)
  return appStore
}

const store = configureAppStore()
const persistor = persistStore(store)

export { store, persistor }
