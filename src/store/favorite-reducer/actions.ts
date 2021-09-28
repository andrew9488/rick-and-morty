export const setFavoriteImage=(favorite: string)=>
    ({type: "FAVORITE/SET-FAVORITE-IMAGE", favorite}as const)