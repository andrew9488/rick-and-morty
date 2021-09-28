import {ImagesReducerActionType, ImagesReducerInitialStateType, InfoType, ResultType} from "../../types/types";

export const imagesReducerInitialState = {
    info: {} as InfoType,
    images: [] as ResultType[]
}

export const imagesReducer = (state: ImagesReducerInitialStateType = imagesReducerInitialState, action: ImagesReducerActionType): ImagesReducerInitialStateType => {
    switch (action.type) {
        case "IMAGES/SET-DATA":
            return {
                ...state,
                info: action.data.info,
                images: action.data.results
            }
        default:
            return state
    }
}