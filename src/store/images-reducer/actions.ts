import {call, put, takeEvery} from "redux-saga/effects";
import {rickAndMortyAPI} from "../../api/api";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer/actions";
import {errorMessage} from "../../utils/helpers/erroreMessage";
import {ResponseDataType} from "../../types/types";

const DATA_REQUEST_SAGA = "DATA-REQUEST-SAGA"
const GET_IMAGE_BY_ID_SAGA = "GET-IMAGE-BY-ID-SAGA"
const CHANGE_CURRENT_PAGE_SAGA = "IMAGES/CHANGE-CURRENT-PAGE"

export const dataRequest = () => ({type: DATA_REQUEST_SAGA} as const)
export const getImageById = (id: number) => ({type: GET_IMAGE_BY_ID_SAGA, id} as const)


export const setDataAC = (data: ResponseDataType) => ({type: "IMAGES/SET-DATA", data} as const)
export const changeCurrentPageAC = (page: number) => ({type: CHANGE_CURRENT_PAGE_SAGA, page} as const)

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

function* fetchImagesByPage(action: ReturnType<typeof changeCurrentPageAC>) {
    try {
        yield put(setAppStatusAC("loading"))
        const response: ResponseDataType = yield call(rickAndMortyAPI.getImagesByPage, action.page)
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

export function* fetchImagesByPageSaga() {
    yield takeEvery(CHANGE_CURRENT_PAGE_SAGA, fetchImagesByPage)
}
