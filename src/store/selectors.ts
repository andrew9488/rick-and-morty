import {AppRootStateType} from "../types/types";
import {createSelector} from "reselect";

const getResults = (state: AppRootStateType) => state.images.results
const getNumbersOfPages = (state: AppRootStateType) => state.images.info.pages
const getPreviousPage = (state: AppRootStateType) => state.images.info.prev
const getNextPage = (state: AppRootStateType) => state.images.info.next
const getFilterData = (state: AppRootStateType) => state.images
const getFavorites = (state: AppRootStateType) => state.favorites.favorites
const getAppStatus = (state: AppRootStateType) => state.app.status
const getAppError = (state: AppRootStateType) => state.app.error

export const imagesSelector = createSelector(
    getResults,
    images => images.map(image => ({id: image.id, image: image.image}))
)
export const resultsSelector = createSelector(
    getResults,
    data => data
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

export const filterSelector = createSelector(
    getFilterData,
    data => {
        return {
            name: data.name,
            page: data.currentPage,
            status: data.status,
            gender: data.gender
        }
    }
)

export const statusSelector = createSelector(
    getAppStatus,
    status => status
)
export const errorSelector = createSelector(
    getAppError,
    error => error
)