import {ImagesReducerActionType, ImagesReducerInitialStateType, InfoType, ResultType} from "../../types/types";

export const imagesReducerInitialState = {
    info: {} as InfoType,
    results: [] as ResultType[],
    currentPage: 1
}

export const imagesReducer = (state: ImagesReducerInitialStateType = imagesReducerInitialState, action: ImagesReducerActionType): ImagesReducerInitialStateType => {
    switch (action.type) {
        case "IMAGES/SET-DATA":
            return {
                ...state,
                info: action.data.info,
                results: action.data.results,
            }
        case "IMAGES/CHANGE-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}