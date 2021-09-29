import {ImagesReducerActionType, ImagesReducerInitialStateType, InfoType, ResultType} from "../../types/types";

export const imagesReducerInitialState = {
    info: {} as InfoType,
    results: [] as ResultType[],
    currentPage: 1,
    name: "",
    gender: "",
    status: ""
}

export const imagesReducer = (state: ImagesReducerInitialStateType = imagesReducerInitialState, action: ImagesReducerActionType): ImagesReducerInitialStateType => {
    switch (action.type) {
        case "IMAGES/SET-DATA":
            return {
                ...state,
                info: action.data.info,
                results: action.data.results,
            }
        case "IMAGES/DATA-REQUEST-SAGA":
            return {
                ...state,
                currentPage: action.page,
                name: action.name,
                gender: action.gender,
                status: action.status
            }
        default:
            return state
    }
}