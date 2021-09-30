import {FavoriteReducerActionType, FavoritesReducerInitialStateType, ImageType} from "../../types/types";

export const favoritesReducerInitialState = {
    favorites: [] as ImageType[]
};

export const favoritesReducer = (state: FavoritesReducerInitialStateType = favoritesReducerInitialState, action: FavoriteReducerActionType): FavoritesReducerInitialStateType => {
    switch (action.type) {
        case "FAVORITES/SET-FAVORITES-IMAGES":
            return {
                ...state,
                favorites: action.favorites
            }
        case "FAVORITES/ADD-FAVORITES-IMAGE":
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }
        case "FAVORITES/DELETE-FAVORITES-IMAGE":
            return {
                ...state,
                favorites: state.favorites.filter(f => f.id !== action.id)
            }
        default:
            return state
    }
}