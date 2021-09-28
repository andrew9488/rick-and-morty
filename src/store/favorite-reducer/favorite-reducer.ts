import {FavoriteReducerActionType, FavoritesReducerInitialStateType} from "../../types/types";

export const favoritesReducerInitialState = {
    favorites: [] as string[]
};

export const favoriteReducer = (state: FavoritesReducerInitialStateType = favoritesReducerInitialState, action: FavoriteReducerActionType): FavoritesReducerInitialStateType => {
    switch (action.type) {
        case "FAVORITE/SET-FAVORITE-IMAGE":
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }
        default:
            return state
    }
}