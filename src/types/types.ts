import {rootReducer} from "../store/store";
import {appReducerInitialState} from "../store/app-reducer/app-reducer";
import {imagesReducerInitialState} from "../store/images-reducer/images-reducer";
import {setAppErrorAC, setAppStatusAC} from "../store/app-reducer/actions";
import {dataRequestAC, setDataAC} from "../store/images-reducer/actions";
import {favoritesReducerInitialState} from "../store/favorite-reducer/favorite-reducer";
import {setFavoriteImage} from "../store/favorite-reducer/actions";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppReducerInitialStateType = typeof appReducerInitialState;
export type ImagesReducerInitialStateType = typeof imagesReducerInitialState;
export type FavoritesReducerInitialStateType = typeof favoritesReducerInitialState;


export type AppReducerActionType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>
export type ImagesReducerActionType = ReturnType<typeof setDataAC> | ReturnType<typeof dataRequestAC>
export type FavoriteReducerActionType = ReturnType<typeof setFavoriteImage>


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