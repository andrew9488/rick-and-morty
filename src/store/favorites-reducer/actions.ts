import {put, takeEvery} from "redux-saga/effects";
import {ImageType} from "../../types/types";

const ADD_FAVORITE_IMAGE_TO_LS_SAGA = "ADD-FAVORITE-IMAGE-TO-LS-SAGA"
const GET_FAVORITE_IMAGE_FROM_LS_SAGA = "GET-FAVORITE-IMAGE-FROM-LS-SAGA"
const DELETE_FAVORITE_IMAGE_FROM_LS_SAGA = "DELETE-FAVORITE-IMAGE-FROM-LS-SAGA"

export const addFavoriteImage = (favorite: ImageType) => ({type: ADD_FAVORITE_IMAGE_TO_LS_SAGA, favorite})
export const getFavoriteImage = () => ({type: GET_FAVORITE_IMAGE_FROM_LS_SAGA})
export const deleteFavoriteImage = (id: number) => ({type: DELETE_FAVORITE_IMAGE_FROM_LS_SAGA, id})

export const addFavoriteImageAC = (favorite: ImageType) => ({type: "FAVORITE/ADD-FAVORITE-IMAGE", favorite} as const)
export const setFavoriteImageAC = (favorites: ImageType[]) => ({
    type: "FAVORITE/SET-FAVORITES-IMAGE",
    favorites
} as const)
export const deleteFavoriteImageAC = (id: number) => ({type: "FAVORITE/DELETE-FAVORITE-IMAGE", id} as const)

function* addFavoriteImageToLocalStorage(action: ReturnType<typeof addFavoriteImage>) {
    if (action.favorite) {
        let favoriteImages = JSON.parse(<string>localStorage.getItem("favorite_images"))
        if (favoriteImages === null) favoriteImages = []
        favoriteImages.push(action.favorite)
        localStorage.setItem("favorite_images", JSON.stringify(favoriteImages))
        yield put(addFavoriteImageAC(action.favorite))
    }

}

function* getFavoriteImageFromLocalStorage() {
    let favorites = localStorage.getItem("favorite_images")
    if (favorites) {
        let favoriteImages = JSON.parse(favorites)
        yield put(setFavoriteImageAC(favoriteImages))
    }
}

function* deleteFavoriteImageFromLocalStorage(action: ReturnType<typeof deleteFavoriteImage>) {
    let favoriteImages: ImageType[] = JSON.parse(<string>localStorage.getItem("favorite_images"))
    if (favoriteImages) {
        let filterImages = favoriteImages.filter(f => f.id !== action.id)
        localStorage.setItem("favorite_images", JSON.stringify(filterImages))
        yield put(deleteFavoriteImageAC(action.id))
    }
}

export function* setFavoriteImageToLocalStorageSaga() {
    yield takeEvery(ADD_FAVORITE_IMAGE_TO_LS_SAGA, addFavoriteImageToLocalStorage)
}

export function* getFavoriteImageFromLocalStorageSaga() {
    yield takeEvery(GET_FAVORITE_IMAGE_FROM_LS_SAGA, getFavoriteImageFromLocalStorage)
}

export function* deleteFavoriteImageFromLocalStorageSaga() {
    yield takeEvery(DELETE_FAVORITE_IMAGE_FROM_LS_SAGA, deleteFavoriteImageFromLocalStorage)
}