import { put } from "redux-saga/effects";
import {
  getCropsListStart,
  getCropsListSuccess,
  getCropsListFailed,
} from "../../actions";
import errorHandler from "../../../utility/errorHandler";
import toaster from "../../../lib/toaster";

export function* getCropsListSaga() {
  yield put(getCropsListStart());
  yield errorHandler({
    endpoint: `pop_list.json`,
    successHandler: yield function* (response) {
      yield put(getCropsListSuccess(response?.data));
    },
    failHandler: yield function* (response) {
      yield put(getCropsListFailed());
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
  });
}
