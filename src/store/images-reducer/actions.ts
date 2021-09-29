import {call, put, takeEvery} from "redux-saga/effects";
import {rickAndMortyAPI} from "../../api/api";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer/actions";
import {errorMessage} from "../../utils/helpers/erroreMessage";
import {ResponseDataType} from "../../types/types";

const DATA_REQUEST_SAGA = "DATA-REQUEST-SAGA"

export const dataRequest = () => ({type: DATA_REQUEST_SAGA})

export const setDataAC = (data: ResponseDataType) =>
    ({type: "IMAGES/SET-DATA", data} as const)

function* fetchImages() {
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

export function* fetchImagesSaga() {
    yield takeEvery(DATA_REQUEST_SAGA, fetchImages)
}