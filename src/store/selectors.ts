import {AppRootStateType} from "../types/types";
import {createSelector} from "reselect";

const resultsSelector = (state: AppRootStateType) => state.images.results

export const imagesSelector = createSelector(
    resultsSelector,
    images => images.map(image => image.image)
)