import {all} from "redux-saga/effects";
import {fetchImagesSaga} from "./images-reducer/actions";
import {
    deleteFavoriteImageFromLocalStorageSaga,
    getFavoriteImageFromLocalStorageSaga,
    setFavoriteImageToLocalStorageSaga
} from "./favorites-reducer/actions";

export function* rootSaga() {
    yield all([
        fetchImagesSaga(),
        setFavoriteImageToLocalStorageSaga(),
        getFavoriteImageFromLocalStorageSaga(),
        deleteFavoriteImageFromLocalStorageSaga(),
    ])
}