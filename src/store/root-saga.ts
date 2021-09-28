import {all, fork} from "redux-saga/effects";
import {imagesSaga} from "./images-reducer/actions";

export function* rootSaga() {
    yield all([fork(imagesSaga)])
}