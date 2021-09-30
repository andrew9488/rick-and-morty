import {call, put, takeEvery} from "redux-saga/effects";
import {rickAndMortyAPI} from "../../api/api";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer/actions";
import {errorMessage} from "../../utils/helpers/erroreMessage";
import {ParamsType, ResponseDataType} from "../../types/types";
import {AxiosResponse} from "axios";

const IMAGES_DATA_REQUEST_SAGA = "IMAGES/DATA-REQUEST-SAGA"
const IMAGES_SET_DATA = "IMAGES/SET-DATA"

export const dataRequestAC = (name: string, page: number, status: string, gender: string,) =>
    ({type: IMAGES_DATA_REQUEST_SAGA, name, page, status, gender} as const)
export const setDataAC = (data: ResponseDataType) => ({type: IMAGES_SET_DATA, data} as const)

function* fetchImages(action: ParamsType) {
    try {
        yield put(setAppStatusAC("loading"))
        const response: AxiosResponse<ResponseDataType> = yield call(rickAndMortyAPI.getImages, action)
        yield put(setDataAC(response.data))
        yield put(setAppStatusAC("succeeded"))
    } catch (error) {
        yield put(setAppErrorAC(errorMessage(error)))
        yield put(setAppStatusAC("failed"))
    }
}

export function* fetchImagesSaga() {
    yield takeEvery(IMAGES_DATA_REQUEST_SAGA, fetchImages)
}
