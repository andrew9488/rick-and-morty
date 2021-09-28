import {all} from "redux-saga/effects";
import {imagesSaga} from "./images-reducer/actions";

export function* rootSaga() {
    yield all([imagesSaga()])
}

// export function* rootSaga() {
//     yield all([fork(imagesSaga)])
// }