import {call, put, takeEvery} from "redux-saga/effects";
import {rickAndMortyAPI} from "../../api/api";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer/actions";
import {errorMessage} from "../../utils/helpers/erroreMessage";
import {ResponseDataType} from "../../types/types";

export const dataRequestAC = () =>
    ({type: "IMAGES/DATA-REQUEST"} as const)

export const setDataAC = (data: ResponseDataType) =>
    ({type: "IMAGES/SET-DATA", data} as const)

function* fetchImagesSaga() {
    try {
        yield put(setAppStatusAC("loading"))
        const response: ResponseDataType = yield call(rickAndMortyAPI.getImages)
        yield put(setDataAC(response))
        yield put(setAppStatusAC("succeeded"))
    } catch (error) {
        yield put(setAppErrorAC(errorMessage(error)))
        yield put(setAppStatusAC("failed"))
    }
}

// export function* imagesSaga() {
//     yield  all([takeLatest(dataRequestAC().type, fetchImagesSaga)])
// }

export function* imagesSaga() {
    yield takeEvery(dataRequestAC().type, fetchImagesSaga)
}