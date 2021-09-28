import {ImageType} from "../../types/types";

export const setFavoriteImage = (favorite: ImageType) =>
    ({type: "FAVORITE/SET-FAVORITE-IMAGE", favorite} as const)
export const deleteFavoriteImage = (id: number) =>
    ({type: "FAVORITE/DELETE-FAVORITE-IMAGE", id} as const)