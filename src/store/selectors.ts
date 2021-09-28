import {AppRootStateType} from "../types/types";
import {createSelector} from "reselect";

const getResults = (state: AppRootStateType) => state.images.results
const getNumbersOfPages = (state: AppRootStateType) => state.images.info.pages
const getPreviousPage = (state: AppRootStateType) => state.images.info.prev
const getNextPage = (state: AppRootStateType) => state.images.info.next
const getFavorites = (state: AppRootStateType) => state.favorites.favorites

export const imagesSelector = createSelector(
    getResults,
    images => images.map(image => ({id: image.id, image: image.image}))
)
export const numbersOfPagesSelector = createSelector(
    getNumbersOfPages,
    pages => pages
)
export const previousPageSelector = createSelector(
    getPreviousPage,
    previous => previous
)
export const nextPageSelector = createSelector(
    getNextPage,
    next => next
)
export const favoritesSelector = createSelector(
    getFavorites,
    favorites => favorites
)