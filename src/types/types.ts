import {rootReducer} from "../store/store";
import {appReducerInitialState} from "../store/app-reducer/app-reducer";
import {setAppErrorAC, setAppStatusAC, setIsInitializedAC} from "../store/app-reducer/actions";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppReducerInitialStateType = typeof appReducerInitialState;


export type AppReducerActionType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setIsInitializedAC>;


export type AppRootStateType = ReturnType<typeof rootReducer>;


type InfoType = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

type ResultType = {
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

export type ResponseType = {
    info: InfoType
    results: ResultType[]
}