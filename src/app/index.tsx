import React, { Component } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { AppNavigator } from "@skeleton/navigation"
import { persistor, store } from "@skeleton/state"
import { IS_DEV_ENV } from "@skeleton/utils"

if (IS_DEV_ENV) {
  import("../services/reactotron")
    .then(() => console.log("Reactotron Configured"))
    .catch((error) => console.error(error))
}

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <AppNavigator authToken="" />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}
