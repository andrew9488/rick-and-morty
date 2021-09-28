import {rootReducer} from "../store/store";
import {appReducerInitialState} from "../store/app-reducer/app-reducer";
import {imagesReducerInitialState} from "../store/images-reducer/images-reducer";
import {setAppErrorAC, setAppStatusAC} from "../store/app-reducer/actions";
import {dataRequestAC, setDataAC} from "../store/images-reducer/actions";
import {deleteFavoriteImage, setFavoriteImage} from "../store/favorites-reducer/actions";
import {favoritesReducerInitialState} from "../store/favorites-reducer/favorites-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type ActionPaginationType = "back" | "forward"
export type ImageType = { image: string, id: number }

export type AppReducerInitialStateType = typeof appReducerInitialState;
export type ImagesReducerInitialStateType = typeof imagesReducerInitialState;
export type FavoritesReducerInitialStateType = typeof favoritesReducerInitialState;


export type AppReducerActionType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>
export type ImagesReducerActionType = ReturnType<typeof setDataAC> | ReturnType<typeof dataRequestAC>
export type FavoriteReducerActionType = ReturnType<typeof setFavoriteImage> | ReturnType<typeof deleteFavoriteImage>


export type AppRootStateType = ReturnType<typeof rootReducer>;


export type InfoType = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export type ResultType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: { name: string, url: string }
    location: { name: string, url: string }
    image: string
    episode: string[]
    url: string
    created: string
}

export type ResponseDataType = {
    info: InfoType
    results: ResultType[]
}