import {put, takeEvery} from "redux-saga/effects";
import {ImageType} from "../../types/types";

const ADD_FAVORITE_IMAGE_TO_LS_SAGA = "ADD-FAVORITE-IMAGE-TO-LS-SAGA"
const GET_FAVORITE_IMAGE_FROM_LS_SAGA = "GET-FAVORITE-IMAGE-FROM-LS-SAGA"
const DELETE_FAVORITE_IMAGE_FROM_LS_SAGA = "DELETE-FAVORITE-IMAGE-FROM-LS-SAGA"
const FAVORITES_ADD_FAVORITE_IMAGE = "FAVORITES/ADD-FAVORITE-IMAGE"
const FAVORITES_SET_FAVORITE_IMAGES = "FAVORITES/SET-FAVORITE-IMAGES"

export const addFavoriteImage = (favorite: ImageType) => ({type: ADD_FAVORITE_IMAGE_TO_LS_SAGA, favorite} as const)
export const getFavoriteImage = () => ({type: GET_FAVORITE_IMAGE_FROM_LS_SAGA} as const)
export const deleteFavoriteImage = (id: number) => ({type: DELETE_FAVORITE_IMAGE_FROM_LS_SAGA, id} as const)

export const addFavoriteImageAC = (favorite: ImageType) => ({type: FAVORITES_ADD_FAVORITE_IMAGE, favorite} as const)
export const setFavoriteImagesAC = (favorites: ImageType[]) =>
    ({type: FAVORITES_SET_FAVORITE_IMAGES, favorites} as const)
export const deleteFavoriteImageAC = (id: number) => ({type: "FAVORITES/DELETE-FAVORITE-IMAGE", id} as const)

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
        yield put(setFavoriteImagesAC(favoriteImages))
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