import { all, call } from "redux-saga/effects"
import { homeSubscription } from "./ducks"

export default function* rootSaga() {
  yield all([call(homeSubscription)])
}
