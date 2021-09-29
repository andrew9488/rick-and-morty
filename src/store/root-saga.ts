import {all} from "redux-saga/effects";
import {fetchImagesByPageSaga, fetchImagesSaga} from "./images-reducer/actions";
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
        fetchImagesByPageSaga(),
    ])
}

// export function* rootSaga() {
//     yield all([fork(fetchImagesSaga)])
// }