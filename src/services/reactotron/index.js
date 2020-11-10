import Reactotron from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"
import sagaPlugin from "reactotron-redux-saga"

export default Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // add redux plugin
  .use(sagaPlugin()) // add redux saga plugin
  .connect() // let's connect!
