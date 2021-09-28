import {FavoriteReducerActionType, FavoritesReducerInitialStateType, ImageType} from "../../types/types";

export const favoritesReducerInitialState = {
    favorites: [] as ImageType[]
};

export const favoritesReducer = (state: FavoritesReducerInitialStateType = favoritesReducerInitialState, action: FavoriteReducerActionType): FavoritesReducerInitialStateType => {
    switch (action.type) {
        case "FAVORITE/SET-FAVORITE-IMAGE":
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }
        case "FAVORITE/DELETE-FAVORITE-IMAGE":
            return {
                ...state,
                favorites: state.favorites.filter(f => f.id !== action.id)
            }
        default:
            return state
    }
}