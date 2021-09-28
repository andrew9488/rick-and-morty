import {all, call, put, takeLatest} from "redux-saga/effects";
import {ResponseDataType} from "../../types/types";
import {rickAndMortyAPI} from "../../api/api";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer/actions";
import {errorMessage} from "../../utils/helpers/erroreMessage";

export const setDataAC = (data: ResponseDataType) =>
    ({type: "IMAGES/SET-DATA", data} as const)

function* fetchImagesSage() {
    yield put(setAppStatusAC("loading"))
    try {
        // @ts-ignore
        yield call(rickAndMortyAPI.getImages)
        yield put(setAppStatusAC("succeeded"))
    } catch (error) {
        yield put(setAppErrorAC(errorMessage(error)))
        yield put(setAppStatusAC("failed"))
    }
}

export function* imagesSaga() {
    yield  all([takeLatest(setDataAC, fetchImagesSage)])
}