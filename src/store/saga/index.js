import { all, takeLatest } from "redux-saga/effects";
import { getCropListData } from "../actions";
import { getCropsListSaga } from "./crops";

function* cropsWatcher() {
  yield takeLatest(getCropListData.type, getCropsListSaga);
}

export default function* rootSaga() {
  yield all([cropsWatcher()]);
}
